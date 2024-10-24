import {useMemo} from 'react';
import {useLocalUid, useRoomInfo} from 'customization-api';
import {PollItem, PollStatus} from '../context/poll-context';
import {isWebOnly} from '../helpers';

interface PollPermissions {
  canCreate: boolean;
  canEdit: boolean;
  canEnd: boolean;
  canViewWhoVoted: boolean;
  canViewVotesPercent: boolean;
  canViewPollDetails: boolean;
}

interface UsePollPermissionsProps {
  pollItem?: PollItem; // The current poll object
}

export const usePollPermissions = ({
  pollItem,
}: UsePollPermissionsProps): PollPermissions => {
  const localUid = useLocalUid();
  const {
    data: {isHost},
  } = useRoomInfo();
  // Calculate permissions using useMemo to optimize performance
  const permissions = useMemo(() => {
    // Check if the current user is the creator of the poll
    const isPollCreator = pollItem?.createdBy.uid === localUid || false;
    // Determine if the user is both a host and the creator of the poll
    const isPollHost = isHost && isPollCreator;
    // Determine if the user is a host but not the creator of the poll (co-host)
    // const isPollCoHost = isHost && !isPollCreator;
    // Determine if the user is an attendee (not a host and not the creator)
    const isPollAttendee = !isHost && !isPollCreator;

    // Determine if the user can create the poll (only the host can create)
    const canCreate = isHost && isWebOnly();
    // Determine if the user can edit the poll (only the poll host can edit)
    const canEdit = isPollHost && isWebOnly();
    // Determine if the user can end the poll (only the poll host can end an active poll)
    const canEnd = isPollHost && pollItem?.status === PollStatus.ACTIVE;

    // Determine if the user can view the percentage of votes
    // - Hosts can always view the percentage of votes
    // - Co-hosts and attendees can view it if share_host or share_attendee is true respectively
    const canViewVotesPercent = true;
    // isPollHost ||
    // (isPollCoHost && pollItem.share_host) ||
    // (isPollAttendee && pollItem.share_attendee);

    // Determine if the user can view poll details (all hosts can view details, attendees cannot)
    const canViewPollDetails = true;
    // isPollHost || isPollCoHost;

    // Determine if the user can view who voted
    // - If `pollItem.anonymous` is true, no one can view who voted
    // - If `pollItem.anonymous` is false, only hosts and co-hosts can view who voted, attendees cannot
    const canViewWhoVoted = !isPollAttendee;
    // canViewPollDetails && !pollItem?.anonymous;

    return {
      canCreate,
      canEdit,
      canEnd,
      canViewVotesPercent,
      canViewWhoVoted,
      canViewPollDetails,
    };
  }, [localUid, pollItem, isHost]);

  return permissions;
};
