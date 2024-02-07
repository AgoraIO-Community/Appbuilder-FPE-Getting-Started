import {
  ClientRole,
  I18nDeviceStatus,
  I18nMuteType,
  I18nRequestConfirmation,
  NetworkQualities,
  customize,
} from "customization-api";

const userCustomization = customize({
  i18n: [
    {
      label: "Renamed",
      locale: "en-us",
      data: {
        //create screen started

        //create screen heading
        createRoomHeading: "Create Party",

        //create screen input label
        createRoomInputLabel: "Party name",

        //create screen input placeholder
        createRoomInputPlaceholderText: "New year party",

        //create screen toggle 1 text
        createRoomMakeEveryOneCoHost: "Make everyone a Co-Host1",

        //create screen toggle 1 tooltip
        createRoomMakeEveryOneCoHostTooltipText:
          "Turning on will give everyone the control of this party",

        //create screen toggle 2 text
        createRoomAllowPhoneNumberJoining: "Allow joining via a phone number1",

        //create screen toggle 2 tooltip
        createRoomAllowPhoneNumberJoiningTooltipText:
          "Attendees can dial a number and join via PSTN1",

        //create screen action button
        createRoomBtnText: "Create PARTY!",

        //to navigate join screem
        createRoomJoinWithID: "Join with a Party ID",

        //create success toast heading
        createRoomSuccessToastHeading: (meetingName) =>
          `${meetingName}  has been created1`,

        //create success toast sub heading
        createRoomSuccessToastSubHeading: "Your New Party is now live",

        //create error toast heading
        createRoomErrorToastHeading: "Error on creating party!",

        //create error toast sub heading
        createRoomErrorToastSubHeading:
          "Sorry, there is problem on creating the party please contact support",

        //create screen ended

        //join screen started

        //heading
        joinRoomHeading: "Join Party!",

        //input label
        joinRoomInputLabel: "Party ID",

        //placeholder text
        joinRoomInputPlaceHolderText: "Enter Party ID",

        //action button
        joinRoomBtnText: "JOIN PARTY",

        //secondary button - to navigate to create
        joinRoomCreateBtnText: "Create a party",

        //error toast heading
        joinRoomErrorToastHeading: "Party ID Invalid",
        //error toast sub-heading
        joinRoomErrorToastSubHeading: "Please enter a valid party id",

        //join screen ended

        //share screen started

        //attendee link label and subtext
        shareRoomAttendeeLinkLabel: "Attendee Link1",
        shareRoomAttendeeLinkSubText:
          "Share this with attendees you want to invite.1",

        //host link label and subtext
        shareRoomHostLinkLabel: "Host Link1",
        shareRoomHostLinkSubText:
          "Share this with other co-hosts you want to invite.1",

        //PSTN label and subtext
        shareRoomPSTNLabel: "PSTN1",
        shareRoomPSTNNumberLabel: "Number1",
        shareRoomPSTNPinLabel: "Pin1",
        shareRoomPSTNSubText:
          "Share this phone number and pin to dial from phone.1",

        //tooltip
        shareRoomCopyBtnTooltipText: "Copied to clipboard1",

        //copy invite button
        shareRoomCopyBtnText: "Copy invite to clipboard1",

        //action button
        shareRoomStartBtnText: "Start Party!",

        //copy meeting links into clipboard
        shareRoomCopyInviteToClipboardContent: ({
          meetingName,
          id,
          url,
          pstn,
          isHost,
          isSeparateHostLink,
        }) => {
          let inviteContent = "";
          if (url) {
            //for host
            if (isHost) {
              if (isSeparateHostLink) {
                //seperate link for host and attendee
                inviteContent += `Room: ${meetingName}\n\nAttendee Link:\n${url?.attendee}\n\nHost Link:\n${url?.host}1`;
              } else {
                //single link for everyone
                inviteContent += `Room: ${meetingName}\n\nMeeting Link:\n${url?.host}1`;
              }
            }
            //for attendee
            else {
              inviteContent += `Room: ${meetingName}\n\nAttendee Link:\n${url?.attendee}1`;
            }
          } else {
            if (isHost) {
              if (isSeparateHostLink) {
                inviteContent += `Room: ${meetingName}\n\nAttendee Room ID:\n${id?.attendee}\n\nHost Room ID:\n${id?.host}1`;
              } else {
                inviteContent += `Room: ${meetingName}\n\nRoom ID:\n${id?.host}1`;
              }
            } else {
              //copy this label on videocall screen
              inviteContent += `Room: ${meetingName}\n\nAttendee Room ID:\n${id?.attendee}1`;
            }
          }
          // Adding pstn data into meeting data if present
          if (pstn?.number && pstn?.pin) {
            inviteContent += `\n\nPSTN Number:\n${pstn.number}\n\nPSTN Pin:\n${pstn.pin}1`;
          }
          return inviteContent;
        },
        //share screen ended

        //precall started

        //permission popup
        //permission popup heading
        permissionPopupHeading: "Allow access to camera and microphone1",
        //permission popup sub heading
        permissionPopupSubHeading:
          "Select “Allow” for others to see and hear you1",
        //dismiss button text
        permissionPopupDismissBtnText: "Dismiss1",
        //permission denied - toast heading
        permissionPopupErrorToastHeading: "Can't find your Camera1",
        //permission denied - toast subheading
        permissionPopupErrorToastSubHeading:
          "Check your system settings to make sure that a camera is available. If not, plug one in and restart your browser1",
        //permission popup

        //precall card
        precallYouAreJoiningAsHeading: "You Are Joining as1",
        precallNameInputPlaceholderText: "Enter Your Name1",
        precallJoinBtnText: ({ waitingRoom, ready, role }) => {
          if (waitingRoom) {
            return ready ? "Ask To Join1" : `Waiting for approval...1`;
          } else {
            return ready
              ? !role
                ? "JOIN Party"
                : `JOIN Party AS ${
                    role === ClientRole.Broadcaster ? "HOST" : "AUDIENCE"
                  }`
              : `Loading...1`;
          }
        },
        //precall card

        //settings panel

        settingsPanelHeading: "SettingsPanelHeader",

        //camera dropdown labels
        settingsPanelCameraLabel: "Camera1",
        settingsPanelNoCameraDetectedText: "No Camera Detected1",
        settingsPanelNoCameraSelectedText: "No Camera Selected1",

        //microphone dropdown labels
        settingsPanelMicrophoneLabel: "Microphone1",
        settingsPanelNoMicrophoneDetectedText: "No Microphone Detected1",
        settingsPanelNoMicrophoneSelectedText: "No Microphone Selected1",

        //speaker dropdown labels
        settingsPanelSpeakerLabel: "Speaker1",
        settingsPanelNoSpeakerDetectedText: "No Speaker Detected1",
        settingsPanelNoSpeakerSelectedText: "No Speaker Selected1",
        settingsPanelSystemDefaultSpeakerText: "System Default Speaker Device1",

        //this label used when system updating the dropdown values
        settingsPanelUpdatingText: "Updating1",

        //Language dropdown label
        settingsPanelLanguageLabel: "Language1",

        //this info used for livestream vertical
        //to inform the user that they can access device once raise hand is approved
        settingsPanelLiveStreamingAttendeeInfo:
          "Attendees need to raise their hand to access the devices.1",

        //applicable only when whiteboard is enabled and active
        settingPanelNameCantbeChangedInfo: `Name can't be changed while whiteboard is active1`,

        //used in the videocall screen
        settingPanelNameInputLabel: "Your Name1",

        //settings panel

        //vb panel
        vbPanelHeading: "Virtual Background1",
        vbPanelInfo: (isCamOn: boolean) =>
          isCamOn
            ? "Camera is currently off. Selected background will be applied as soon as your camera turns on.1"
            : "Your camera is switched off. Save a background to apply once it’s turned on.1",
        vbPanelOptionNoneText: "None1",
        vbPanelOptionBlurText: "Blur1",
        vbPanelOptionCustomText: "Custom1",

        //used in the videocall screen
        vbPanelAppliedBtnText: "Applied1",
        vbPanelApplyBtnText: "Apply1",

        //custom file upload error toast
        vbPanelImageUploadErrorToastHeading: "Upload Failed1",
        vbPanelImageUploadErrorToastSubHeading:
          "Selected image is already uploaded1",
        vbPanelImageTypeErrorToastHeading: "Upload Failed1",
        vbPanelImageTypeErrorToastSubHeading:
          "Please select a JPG or PNG file1",
        vbPanelImageSizeLimitErrorToastHeading: "Upload Failed1",
        vbPanelImageSizeLimitErrorToastSubHeading:
          "File size must be less than 1MB.1",

        //vb panel

        //precall ended

        //videocall started

        //toolbar items- top and bottom and more button

        //bottom left toolbar items
        toolbarItemLayoutText: "Layout1",
        toolbarItemLayoutOptionGridText: "Grid1",
        toolbarItemLayoutOptionSidebarText: "Sidebar1",
        toolbarItemInviteText: "Invite1",

        //center toolbar items
        toolbarItemMicrophoneText: (deviceStatus) => {
          switch (deviceStatus) {
            case I18nDeviceStatus.ON:
              return "Mic On1";
            case I18nDeviceStatus.OFF:
              return "Mic Off1";
            case I18nDeviceStatus.PERMISSION_DENIED:
              return "Mic1";
            default:
              return "Mic1";
          }
        },
        toolbarItemMicrophoneTooltipText: (deviceStatus) => {
          switch (deviceStatus) {
            case I18nDeviceStatus.ON:
              return "Disable Mic1";
            case I18nDeviceStatus.OFF:
              return "Enable Mic1";
            case I18nDeviceStatus.PERMISSION_DENIED:
              return "Give Permissions1";
            default:
              return "Mic1";
          }
        },
        toolbarItemCameraText: (deviceStatus) => {
          switch (deviceStatus) {
            case I18nDeviceStatus.ON:
              return "Video On1";
            case I18nDeviceStatus.OFF:
              return "Video Off1";
            case I18nDeviceStatus.PERMISSION_DENIED:
              return "Video1";
            default:
              return "Video1";
          }
        },
        toolbarItemCameraTooltipText: (deviceStatus) => {
          switch (deviceStatus) {
            case I18nDeviceStatus.ON:
              return "Disable Camera1";
            case I18nDeviceStatus.OFF:
              return "Enable Camera1";
            case I18nDeviceStatus.PERMISSION_DENIED:
              return "Give Permissions1";
            default:
              return "Video1";
          }
        },
        toolbarItemShareText: (active) => (active ? "Stop Share1" : "Share1"),
        toolbarItemRecordingText: (active) =>
          active ? "Stop Rec1" : "Record1",
        toolbarItemLeaveText: "Leave1",
        toolbarItemMoreText: "More1",

        //more button items
        toolbarItemNoiseCancellationText: "Noise Cancellation1",
        toolbarItemVitrualBackgroundText: "Virtual Background1",
        toolbarItemWhiteboardText: (active) =>
          active ? "Hide Whiteboard1" : "Show Whiteboard1",
        toolbarItemCaptionText: (active) =>
          active ? "Hide Caption1" : "Show Caption1",
        toolbarItemTranscriptText: (active) =>
          active ? "Hide Transcript1" : "Show Transcript1",

        toolbarItemRaiseHandText: (active) =>
          active ? "Lower Hand1" : "Raise Hand1",

        //top right toolbar items
        toolbarItemPeopleText: "People1",
        toolbarItemChatText: "Chat1",
        toolbarItemSettingText: "Settings1",

        livestreamingMicrophoneTooltipText: (isHandRaised) =>
          isHandRaised
            ? "Waiting for host to appove the request1"
            : "Raise Hand in order to turn mic on1",
        livestreamingCameraTooltipText: (isHandRaised) =>
          isHandRaised
            ? "Waiting for host to appove the request1"
            : "Raise Hand in order to turn video on1",
        livestreamingShareTooltipText: (isHandRaised) =>
          isHandRaised
            ? "Waiting for host to appove the request1"
            : "Raise Hand in order to present1",

        //toolbar

        //videocall

        //invite title label - if only one user on the call
        inviteTileWelcomeText: "Welcome1",
        inviteTileNoElseJoinedYetText: "No one else has joined yet.1",
        inviteTileCopyInviteBtnText: "COPY INVITATION1",
        //invite title label - if only one user on the call

        //invite popup
        invitePopupHeading: "Invite others to join this room1",
        invitePopupPrimaryBtnText: "COPY INVITATION1",
        //invite popup

        pstnUserLabel: "PSTN User1",

        //video title network quality label
        //it will be displayed on hover
        videoTileNetworkQuailtyLabel: (quality: NetworkQualities) => {
          switch (quality) {
            case "unknown":
              return "Network Unsupported1";
            case "excellent":
              return "Excellent Network1";
            case "good":
              return "Good Network1";
            case "bad":
              return "Bad Network1";
            case "veryBad":
              return "Very Bad Network1";
            case "unpublished":
              return "Network Unpublished1";
            case "loading":
              return "Network Loading1";
            default:
              return "Loading1";
          }
        },
        //more button label on video tile and participant
        moreBtnViewWhiteboard: "View Whiteboard1",
        moreBtnRemoveFromLarge: "Remove from large1",
        moreBtnViewInLarge: "View in large1",
        moreBtnPinToTop: "Pin to top1",
        moreBtnRemoveFromTop: "Remove from top1",
        moreBtnMessagePrivately: "Message Privately1",
        moreBtnAudio: (audio) => (audio ? "Mute Audio1" : "Request Audio1"),
        moreBtnVideo: (video) => (video ? "Mute Video1" : "Request Video1"),
        moreBtnAddAsPresenter: "Add as Presenter1",
        moreBtnRemoveAsPresenter: "Remove as Presenter1",
        moreBtnRemoveFromRoom: "Remove from Room1",
        moreBtnChangeName: "Change Name1",
        moreBtnStopScreenShare: "Stop Screenshare1",
        moreBtnRemoveScreenShare: "Remove Screenshare1",

        // native screen share popup
        // in mobile device camera need to be turn off in order to share the screen
        // this popup is used to alert the camera will be turn off
        nativeScreensharePopupHeading: "Screen Share1",
        nativeScreensharePopupSubHeading: (camActive) =>
          camActive
            ? "NOTE: Camera and all incoming videos will be turned OFF for an optimised performance, do you wish to proceed?1"
            : "NOTE: All incoming videos will be turned OFF for an optimised performance, do you wish to proceed?1",
        nativeScreensharePopupPrimaryBtnText: "PROCEED1",
        nativeScreensharePopupIncludeDeviceAudioText: "Include device audio1",

        //when user tries to turn on the camera While screensharing is going
        //we will alert the user to turn off the screen share to continue
        nativeStopScreensharePopupHeading: "Stop Screen Share?1",
        nativeStopScreensharePopupSubHeading:
          "You need to stop sharing your screen in order to turn the camera ON1",
        nativeStopScreensharePopupPrimaryBtnText:
          "STOP SHARE & TURN CAMERA ON1",

        //stop recording popup - confirmation popup to stop recording
        stopRecordingPopupHeading: "Stop Recording?1",
        stopRecordingPopupSubHeading:
          "Are you sure you want to stop recording? You can’t undo this action.1",
        stopRecordingPopupPrimaryBtnText: "END RECORDING1",

        //clear all whiteboard popup - confirmation popup to clearall content drawn and uploaded in the whiteboard
        clearAllWhiteboardPopupHeading: "Clear Whiteborad?1",
        clearAllWhiteboardPopupSubHeading:
          "Are you sure you want to clear the whiteboard?1",
        clearAllWhiteboardPopupPrimaryBtnText: "CLEAR ALL1",

        //leave room popup - confirmation popup before leaving the room
        leaveRoomPopupHeading: "Leave Room?1",
        leaveRoomPopupSubHeading: (transcriptDownloadAvailable) =>
          transcriptDownloadAvailable
            ? `Sure you want to leave? You haven't downloaded your transcripts yet.1`
            : "Are you sure you want to leave this meeting?1",
        leaveRoomPopupPrimaryBtnText: "LEAVE1",

        //remove user popup - confirmation popup to remove the user from the call
        removeFromRoomPopupHeading: (name) => `Remove ${name}?1`,
        removeFromRoomPopupSubHeading: (name) =>
          `Once removed, ${name} will still be able to rejoin the room later.1`,
        removeFromRoomPopupPrimaryBtnText: "REMOVE1",

        //toast to inform user once that host removed you from the call
        userRemovedFromTheRoomToastHeading: (name) =>
          `The system will remove ${name} from this call after 5 secs.1`,

        //remove screenshare popup - confirmation popup to remove the screenshare from the call
        removeScreenshareFromRoomPopupHeading: "Remove Screenshare?1",
        removeScreenshareFromRoomPopupSubHeading: (name) =>
          `Once removed, ${name} will still be able to screen share later.1`,
        removeScreenshareFromRoomPopupPrimaryBtnText: "REMOVE1",

        //stt related labels

        //change spoken language poup
        sttChangeSpokenLanguagePopupHeading: (isFirstTimeOpened) =>
          isFirstTimeOpened
            ? "Set Spoken Language1"
            : "Change Spoken Language1",
        sttChangeSpokenLanguagePopupSubHeading:
          "What language(s) are being spoken by everyone in this meeting?1",
        sttChangeSpokenLanguagePopupPrimaryBtnText: "CONFIRM1",
        sttChangeSpokenLanguagePopupDropdownInfo:
          "You can choose a maximum of two languages1",
        sttChangeSpokenLanguagePopupDropdownError:
          "Choose at least one language to proceed1",
        sttChangeSpokenLanguageText: "Change Spoken Language1",

        //transcript related
        sttTranscriptPanelHeaderText: "Meeting Transcript1",
        sttDownloadBtnText: "Download1",
        sttDownloadTranscriptBtnText: "Download Transcript1",
        sttSettingSpokenLanguageText: "Setting Spoken Language1",
        sttLanguageChangeInProgress: "Language Change is in progress...1",

        sttTranscriptPanelSearchText: "Search1",
        sttTranscriptPanelNoSearchResultsFoundText: "No search results found1",
        sttTranscriptPanelViewLatestText: "View Latest1",

        sttSpokenLanguageToastHeading: (action) => `Spoken Language ${action}1`,
        sttSpokenLanguageToastSubHeading: ({
          action,
          newLanguage,
          oldLanguage,
          username,
        }) =>
          action === "Set"
            ? `${username} has set the spoken language to "${newLanguage}"1`
            : `${username} changed the spoken language from "${oldLanguage}" to ${newLanguage}1`,

        //Side panel labels
        peoplePanelHeaderText: "People1",

        //people panel host controls labels
        peoplePanelTurnoffAllCameraBtnText: "Turn off all cameras1",
        peoplePanelMuteAllMicBtnText: "Mute All1",

        //people panel labels
        peoplePanelHostSectionHeaderText: "HOST1",
        peoplePanelAudienceSectionHeaderText: "AUDIENCE1",
        peoplePanelInThisMeetingLabel: "IN THIS MEETING1",
        peoplePanelNoHostJoinedContent: "No Host has joined yet.1",
        peoplePanelNoAudienceJoinedContent: "No Audience has joined yet.1",
        peoplePanelNoUsersJoinedContent: "No Users has joined yet.1",
        peoplePanelWantToJoinText: "WANT TO JOIN1",
        peoplePanelWaitingText: "WAITING1",

        peoplePanelMeText: "Me1",
        peoplePanelPresenterText: "Presenter1",

        peoplePanelWaitingRoomRequestApprovalBtnTxt: "Admit1",
        peoplePanelWaitingRoomRequestDenyBtnTxt: "Deny1",
        peoplePanelUserNotFoundLabel: "User not found1",
        peoplePanelStreamingRequestSectionHeader: "STREAMING REQUEST1",
        peoplePanelLivestreamingApprovalBtnText: "Accept1",
        peoplePanelLivestreamingDenyBtnText: "Deny1",

        waitingRoomApprovalRequiredToastHeading: "Approval Required1",
        waitingRoomApprovalRequiredToastSubHeading: (username) =>
          `${username} is waiting for approval to join the call1`,
        waitingRoomApprovalRequiredPrimaryBtnText: "Admit1",
        waitingRoomApprovalRequiredSecondaryBtnText: "Deny1",

        //people panel confirmation popover
        muteAllConfirmationPopoverContent: (type: I18nMuteType) =>
          `Mute everyone's ${type} on the call?1`,
        requestConfirmationPopoverContent: ({
          name,
          type,
        }: I18nRequestConfirmation) =>
          `Request ${name} to turn on their ${
            type === I18nMuteType.audio ? "microphone1" : "camera1"
          }?`,
        muteConfirmationPopoverContent: ({ name, type }) =>
          `Mute ${name}'s ${type} for everyone on the call? Only ${name} can unmute themselves.1`,

        //mute/request popover action button
        muteAllConfirmationPopoverPrimaryBtnText: "Mute All1",
        muteConfirmationPopoverPrimaryBtnText: "Mute1",
        requestConfirmationPopoverPrimaryBtnText: "Request1",

        //chat
        //chat sub tab labels
        chatPanelGroupTabText: "Group1",
        chatPanelPrivateTabText: "Private1",
        chatPanelUserOfflineText: "User is offline1",
        chatPanelUnreadMessageText: "Unread message1",

        //chat container placeholder content
        groupChatWelcomeContent: (noMessage) =>
          noMessage
            ? "Welcome to Chat!1\nAll messages are deleted when call ends.1"
            : "All messages are deleted when call ends.1",

        //chat input box placeholder text
        groupChatInputPlaceHolderText: (name) => `Chat publicy as ${name}...1`,
        privateChatInputPlaceHolderText: (name) =>
          `Private Message to ${name}1`,

        //chat toast notification

        //single user public chat
        publicChatToastHeading: (name: string) =>
          `${name} commented in the public chat1`,

        //multiple user public chat
        multiplePublicChatToastHeading: "New comments in Public Chat1",
        multiplePublicChatToastSubHeading: ({ count, from }) =>
          `You have ${count} new messages from ${from}1`,

        //private chat
        privateChatToastHeading: "You’ve received a private message1",

        //single private chat message
        multiplePrivateChatToastHeading: ({ count }) =>
          `You’ve received ${count} private messages1`,

        //multiple private chat and public chat message
        multiplePublicAndPrivateChatToastHeading:
          "New comments in Public & Private Chat1",
        multiplePublicAndPrivateChatToastSubHeading: ({
          publicChatCount,
          privateChatCount,
          from,
        }) =>
          `You have ${publicChatCount} new messages from ${from} and ${privateChatCount} Private chat1`,

        //livestreaming attendee info tile
        //it will shown to livestreaming attendee when host is not joined.
        livestreamingAttendeeWhatYouCanDoText: "Here's what you can do here :1",
        livestreamingAttendeeInviteOthersText: "INVITE OTHER ATTENDEES1",
        livestreamingAttendeeWaitingForHostToJoinText:
          "Waiting for the host to join1",

        livestreamingAttendeeRaiseHandInfoHeading: "Raise Your hand1",
        livestreamingAttendeeRaiseHandInfoSubHeading:
          "Let everyone know that you've something to say1",
        livestreamingAttendeeChatWithOthersInfoHeading: "Chat with others1",
        livestreamingAttendeeChatWithOthersInfoSubHeading:
          "Message fellow attendees or the hosts1",
        livestreamingAttendeePresentYourScreenInfoHeading:
          "Present Your screen1",
        livestreamingAttendeePresentYourScreenInfoSubHeading:
          "Be a presenter post the host’s approval1",
        livestreamingAttendeeJoinWithActivitiesInfoHeading:
          "Join in activities1",
        livestreamingAttendeeJoinWithActivitiesInfoSubHeading:
          "Jam with everyone on a whiteboard1",

        //livestreaming notification and buttons labels

        livestreamRaiseHandRequestToastHeading: "You’ve raised your hand.1",
        livestreamRaiseHandRequestToastSubHeading:
          "Waiting for host to approve the request1",

        livestreamRaiseHandRequestReceivedToastHeading: (name) =>
          `${name} has raised their hand to be a Presenter1`,
        livestreamRaiseHandRequestReceivedToastSubHeading:
          "Once approved they will be able to speak, share their video and present during this call.1",

        livestreamRaiseHandRequestAcceptedToastHeading:
          "Host has approved your request.1",
        livestreamRaiseHandRequestAcceptedToastSubHeading:
          "You are now a Presenter1",

        livestreamRaiseHandRequestRejectedToastHeading:
          "Your request was rejected by the host1",

        livestreamRaiseHandRequestRecallToastHeading: (name) =>
          `${name} has lowered their hand1`,

        livestreamRaiseHandRequestRecallLocalToastHeading:
          "You’ve lowered your hand.1",

        livestreamRaiseHandApprovedRequestRecallToastHeading:
          "Host has revoked streaming permissions.1",

        livestreamPromoteAsCoHostToastHeading:
          "Host promoted you as a Presenter1",
        livestreamRequestAlreadyProcessed: "Request already processed.1",

        //livestreaming toast action button
        livestreamToastApprovalBtnText: "ALLOW TO BE A PRESENTER1",
        livestreamToastDenyBtnText: "DENY1",

        videoRoomUserFallbackText: "User1",

        videoRoomRecordingText: "Recording1",
        videoRoomGoToActiveSpeakerText: "Go To Active Speaker1",
        videoRoomScreenshareText: (username) => `${username}'s screenshare1`,
        videoRoomStartingCallText: "Starting Call. Just a second.1",

        videoRoomScreenshareOverlayText: "You are sharing your screen1",
        videoRoomScreenshareStopSharingBtnText: "Stop Sharing1",
        videoRoomScreenShareErrorToastHeading:
          "Failed to initiate screen sharing1",
        videoRoomScreenShareErrorToastSubHeading: "Permission denied1",

        videoRoomRecordingToastHeading: (active) =>
          active ? "Recording Started1" : "Recording Stopped1",
        videoRoomRecordingToastSubHeading: (name) =>
          `This room is being recorded by ${name}1`,

        //whiteboard label
        whiteboardInitializingText: "Whiteboard is initializing1",

        //whiteboard widget labels
        whiteboardWidgetViewOnlyText: "View Only1",
        whiteboardWidgetZoomInText: "Zoom In1",
        whiteboardWidgetZoomOutText: "Zoom Out1",
        whiteboardWidgetFitToScreenText: "Fit To Screen1",
        whiteboardWidgetRedoText: "Redo1",
        whiteboardWidgetUndoText: "Undo1",
        whiteboardWidgetExportToCloudText: "Export To Cloud1",

        //whiteboard toolbox
        whiteboardToolboxSelectText: "Select1",
        whiteboardToolboxTextFormatting: "Text1",
        whiteboardToolboxMoveText: "Move1",
        whiteboardToolboxLaserText: "Laser1",
        whiteboardToolboxEraseText: "Eraser1",
        whiteboardToolboxUploadText: "Upload Document or Image1",
        whiteboardToolboxClearAllText: "Clear All1",
        whiteboardToolboxWidthLabel: "Width1",
        whiteboardToolboxPxLabel: " px1",

        //whiteboard toast

        //whiteboard export toast
        whiteboardExportErrorToastHeading: "Failed to export the whiteboard1",
        whiteboardExportInfoToastHeading:
          "Please wait few seconds to get the screenshot link of the whiteboard1",
        whiteboardExportSuccessToastHeading:
          "Whiteboard exported as an image. Link copied to your clipboard.1",

        //whiteboard file upload
        whiteboardFileUploadErrorToastHeading: (type) =>
          `Error on uploading ${type}, please try again.1`,
        whiteboardFileUploadInfoToastHeading: (type) =>
          `${type} Upload will take few seconds to appear in whiteboard1`,
        whiteboardFileUploadTypeErrorToastHeading: () => "Unsupported file1",
        whiteboardFileUploadTypeErrorToastSubHeading: () =>
          "Please select file format with pdf, doc, docx, ppt, pptx, png, jpg, jpeg1",

        deviceDetectionToastHeading: (name) => `New ${name} detected1`,
        deviceDetectionToastSubHeading: ({ name, label }) =>
          `New ${name} named ${label} detected. Do you want to switch?1`,
        deviceDetectionPrimaryBtnText: "SWITCH DEVICE1",
        deviceDetectionCancelBtnText: "IGNORE1",
        deviceDetectionCheckboxText: "Remember my choice1",

        hostMutedUserToastHeading: (type) =>
          type === "audio"
            ? "The host has muted your audio.1"
            : "The host has muted your video.1",
        hostRequestedUserToastHeading: (type) =>
          type === "audio"
            ? "The host has requested you to speak1"
            : "The host has asked you to start your video.1",
        hostRequestedUserToastPrimaryBtnText: () => "UNMUTE1",
        hostRequestedUserToastSecondaryBtnText: () => "LATER1",
        hostRemovedUserToastHeading: "The host has removed you from the room.1",

        //common labels
        cancelText: "CANCEL",
        loadingText: "Loading...",
        //common labels

        //auth/login related labels

        //logout confirmation popup
        logoutText: "Logout1",
        authLogoutPopupHeading: "Logout?1",
        authLogoutPopupSubHeading: "Are you sure you wanna log out?1",
        authLogoutPopupPrimaryBtnText: "CONFIRM1",

        //native popup to require authentication if login enabled
        authLogInRequiredPopupHeading: "Login Required1",
        authLogInRequiredPopupSubHeading:
          "Log-in to your organization to contiue1",
        authLogInRequiredPopupPrimaryBtnText: "LOGIN1",
        authLogInRequiredPopupSecondaryBtnText: "CLOSE APP1",

        //auth login error toast
        authSessionTimeoutToastHeading:
          "Your session has timed out, Retrying...1",
        authErrorOnLoginToastHeading:
          "Error occured on Login, Please login again.1",
        authAuthenticationFailedText: "Authentication failed1",
        authAuthorizingApplicationText: "Authorizing app...1",
      },
    },
  ],
});
export default userCustomization;
