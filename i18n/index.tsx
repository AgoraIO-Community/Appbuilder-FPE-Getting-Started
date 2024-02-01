import { I18nDeviceStatus, customize } from "customization-api";

const userCustomization = customize({
  i18n: [
    {
      label: "Renamed",
      locale: "en-us",
      data: {
        cancel: "CANCEL1",
        headingVideoMeeting: "Create a Room1",
        headingLiveStream: "Create a Livestream1",
        headingVoiceChat: "Create a Voice Chat1",
        headingAudioLivecast: "Create a Audio Livecast1",
        loadingWithDots: "Loading...1",
        inputLabelVideoMeeting: "Room Name1",
        inputLabelLiveStream: "Stream Name1",
        inputLabelVoiceChat: "Voice Chat Name1",
        inputLabelAudioLivecast: "Audio Livecast Name1",
        meetingNameInputPlaceholder: "The Annual Galactic Meet1",
        everyoneCoHost: "Make everyone a Co-Host1",
        everyoneCoHostTooltip:
          "Turning on will give everyone the control of this room1",
        allowPhoneNumberJoining: "Allow joining via a phone number1",
        allowPhoneNumberJoiningToolTip:
          "Attendees can dial a number and join via PSTN1",
        createRoom: "CREATE A ROOM1",
        createLiveStream: "CREATE A STREAM1",
        createVoiceChat: "CREATE A VOICE CHAT1",
        createAudioLivecast: "CREATE A AUDIO LIVECAST1",
        joinWithRoomID: "Join with a room ID1",
        createRoomSuccessToastHeading: (meetingName) =>
          `${meetingName}  has been created1`,
        createRoomSuccessToastSubHeading: "Your New room is now live1",

        roomId: "Room ID1",
        streamId: "Stream ID1",
        enterRoomId: "Enter Room ID1",
        enterStreamId: "Enter Stream ID1",
        joinRoom: "Join Room1",
        joinStream: "Join Stream1",
        createStream: "Create a Stream1",
        invalidRoomIdToastHeading: "Room ID Invalid.1",
        invalidRoomIdToastSubheading: "Please enter a valid Room ID1",

        roomLink: "Room Link1",
        attendeeLink: "Attendee Link1",
        attendeeId: "Attendee ID1",
        hostLink: "Host Link1",
        hostId: "Host ID1",
        PSTN: "PSTN1",
        number: "Number1",
        pin: "Pin1",
        copyInviteButton: "Copy invite to clipboard1",
        copiedToClipboard: "Copied to clipboard1",
        shareWithAttendee: "Share this with attendees you want to invite.1",
        shareWithCoHost: "Share this with other co-hosts you want to invite.1",
        startRoom: "Start Room (as host)1",
        startStream: "Start Stream (as host)1",
        sharePhoneNumber:
          "Share this phone number and pin to dial from phone.1",

        allowMicPermision: "Allow access to microphone1",
        allowMicAndCameraPermission: "Allow access to camera and microphone1",
        select: "Select1",
        allow: " “Allow” 1",
        otherToHearYou: "for others to hear you1",
        otherToSeeAndHearYou: "for others to see and hear you1",
        dismiss: "Dismiss1",
        cantFindDeviceToastHeading: (audioRoom) =>
          `Can't find your ${audioRoom ? " Microphone" : " Camera"}1`,
        cantFindDeviceToastSubHeading: (audioRoom) =>
          `Check your system settings to make sure that a ${
            audioRoom ? "microphone" : "camera"
          } is available. If not, plug one in and restart your browser1`,

        settings: "Settings1",
        youAreJoiningAs: "You are joining1",

        microphone: "Microphone1",
        speaker: "Speaker1",
        camera: "Camera1",
        noCameraDetected: "No Camera Detected1",
        noMicrophoneDetected: "No Microphone Detected1",
        noSpeakerDetected: "No Speaker Detected1",
        noCameraSelected: "No Camera Selected1",
        noMicrophoneSelected: "No Microphone Selected1",
        noSpeakerSelected: "No Speaker Selected1",
        livestreamAttendeeSettingInfo:
          "Attendees need to raise their hand to access the devices.1",

        speakerDefaultDevice: "System Default Speaker Device1",
        updating: "Updating1",

        virtualBackground: "Virtual Background1",
        virtualBackgroundCameraInfo: (isCamOn: boolean) =>
          isCamOn
            ? `Camera is currently off. Selected background will be applied as soon as your camera turns on.1`
            : `Your camera is switched off. Save a background to apply once it’s turned on.1`,

        none: "None1",
        blur: "Blur1",
        custom: "Custom1",

        enterYourName: "Enter Your Name1",
        yourName: "Your Name1",
        joiningAs: "Joining as1",
        gettingName: "Getting name...1",
        nameInputPlaceholder: "Luke Skywalker1",

        joinRoomButton: ({ ready, role }) =>
          ready
            ? !role
              ? "JOIN ROOM1"
              : `JOIN ROOM AS ${role === 1 ? "HOST" : "AUDIENCE"}1`
            : `1Loading...`,
        waitingRoomButton: ({ ready }) =>
          ready ? "Ask To Join1" : `Waiting for approval...1`,

        people: "People1",
        chat: "Chat1",
        layout: "Layout1",
        invite: "Invite1",
        videoButton: (deviceStatus) => {
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
        micButton: (deviceStatus) => {
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
        videoButtonTooltip: (deviceStatus) => {
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
        micButtonTooltip: (deviceStatus) => {
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
        moreButton: "More1",

        noiseCancellation: "Noise Cancellation1",
        startWhiteboard: "Start Whiteboard1",
        hideWhiteboard: "Hide Whiteboard1",
        showWhiteboard: "Show Whiteboard1",
        hideTranscript: "Hide Transcript1",
        showTranscript: "Show Transcript1",
        showCaption: "Show Caption1",
        hideCaption: "Hide Caption1",
        switchCameraButton: "Switch Camera1",
        raiseHandButton: (active) => (active ? "Lower Hand1" : "Raise Hand1"),

        screenShareButton: (active) => (active ? "Stop Share1" : "Share1"),
        recordingButton: (active) => (active ? "Stop Rec1" : "Record1"),

        leaveButton: "Leave1",

        nameCantbeChangedInfo: `Name can't be changed while whiteboard is active1`,
        noOneElseJoinedYet: "No one else has joined yet.1",
        noOneElseJoinedYetInviteOthers:
          "No one else has joined yet, invite others?1",

        inviteOthersButton: "INVITE OTHERS1",
        copyInvitationButton: "COPY INVITATION1",
        welcome: "Welcome1",
        invitePopupHeading: "Invite others to join this room1",

        pstnUserLabel: "PSTN User1",

        networkQualityLabel: (quality) => {
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
        meetingInviteText: ({
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
        applied: "Applied1",
        apply: "Apply1",
        grid: "Grid1",
        sidebar: "Sidebar1",
        nativeScreensharePopupActionButton: "PROCEED1",
        nativeScreensharePopupHeading: "Screen Share1",
        nativeScreensharePopupSubHeadingLocalCamOff:
          "NOTE: All incoming videos will be turned OFF for an optimised performance, do you wish to proceed?1",
        nativeScreensharePopupSubHeadingLocalCamOn:
          "NOTE: Camera and all incoming videos will be turned OFF for an optimised performance, do you wish to proceed?1",
        includeDeviceAudio: "Include device audio1",
        stopRecordingPopupHeading: "Stop Recording?1",
        stopRecordingPopupSubHeading:
          "Are you sure you want to stop recording? You can’t undo this action.1",
        stopRecordingActionButton: "END RECORDING1",
        stopScreenSharePopupHeading: "Stop Screen Share?1",
        stopScreenSharePopupSubHeading:
          "You need to stop sharing your screen in order to turn the camera ON1",
        stopScreenSharingActionButton: "STOP SHARE & TURN CAMERA ON1",
        clearAllWhiteboardPopupHeading: "Clear Whiteborad?1",
        clearAllWhiteboardPopupSubHeading:
          "Are you sure you want to clear the whiteboard?1",
        clearAllWhiteboardActionButton: "CLEAR ALL1",
        leaveMeetingPopupHeading: "Leave Room?1",
        leaveMeetingPopupSubHeading:
          "Are you sure you want to leave this meeting?1",
        leaveMeetingPopupSubHeadingWithTranscript: `Sure you want to leave? You haven't downloaded your transcripts yet.1`,
        leaveMeetingPopupActionButton: "LEAVE1",

        group: "Group1",
        private: "Private1",

        groupChatWelcomeInfo: "Welcome to Chat!1",
        groupChatWelcomeSubInfo: "All messages are deleted when call ends.1",
        groupChatInputPlaceHolder: (name) => `Chat publicy as ${name}...1`,
        privateChatInputPlaceHolder: (name) => `Private Message to ${name}1`,

        turnoffAllCameras: "Turn off all cameras1",
        muteAllMicrophone: "Mute All1",

        host: "HOST1",
        audience: "AUDIENCE1",
        inThisMeeting: "IN THIS MEETING1",
        noHostJoinedYet: "No Host has joined yet.1",
        noAudienceJoinedYet: "No Audience has joined yet.1",
        noUsersJoinedYet: "No Users has joined yet1",

        languageSelectionPopupHeading: (isFirstTimeOpened) =>
          isFirstTimeOpened
            ? "Set Spoken Language1"
            : "Change Spoken Language1",
        languageSelectionPopupSubHeading:
          "What language(s) are being spoken by everyone in this meeting?1",
        languageSelectionPopupActionButton: "CONFIRM1",
        languageSelectionPopupDropdownError:
          "Choose at least one language to proceed1",
        languageSelectionPopupDropdownInfo:
          "You can choose a maximum of two languages1",

        meetingTranscript: "Meeting Transcript1",
        download: "Download1",
        downloadTranscript: "Download Transcript1",
        settingSpokenLanguage: "Setting Spoken Language1",
        languageChangeInProgress: "Language Change is in progress...1",
        language: "Language1",

        whiteboardInitializing: "Whiteboard is initializing1",
        viewWhiteboard: "View Whiteboard1",
        removeFromLarge: "Remove from large1",
        viewInLarge: "View in large1",
        pinToTop: "Pin to top1",
        removeFromTop: "Remove from top1",
        messagePrivately: "Message Privately1",
        muteAudio: "Mute Audio1",
        requestAudio: "Request Audio1",
        muteVideo: "Mute Video1",
        requestVideo: "Request Video1",
        addAsPresenter: "Add as Presenter1",
        removeAsPresenter: "Remove as Presenter1",
        removeFromRoom: "Remove from Room1",
        changeName: "Change Name1",
        stopScreenShare: "Stop Screenshare1",
        removeScreenShare: "Remove Screenshare1",

        removeFromMeetingPopupHeading: (name) => `Remove ${name}?1`,
        removeFromMeetingPopupSubHeading: (name) =>
          `Once removed, ${name} will still be able to rejoin the room later.1`,
        removeFromMeetingPopupActionButton: "REMOVE1",

        removeScreenshareFromMeetingPopupHeading: "Remove Screenshare?1",
        removeScreenshareFromMeetingPopupSubHeading: (name) =>
          `Once removed, ${name} will still be able to screen share later.1`,
        removeScreenshareFromMeetingPopupActionButton: "REMOVE1",

        muteAllConfirmation: (type) => `Mute everyone's ${type} on the call?1`,
        requestConfirmation: ({ name, type }) =>
          `Request ${name} to turn on their ${
            type === "audio" ? "microphone" : "camera"
          }?1`,
        muteConfirmation: ({ name, type }) =>
          `Mute ${name}'s ${type} for everyone on the call? Only ${name} can unmute themselves.1`,

        muteButton: "Mute1",
        requestButton: "Request1",
        wantToJoin: "WANT TO JOIN1",
        waiting: "WAITING1",

        publicChatToastHeading: (name: string) =>
          `${name} commented in the public chat1`,

        multiplePublicChatToastHeading: "New comments in Public Chat1",
        multiplePublicChatToastSubHeading: ({ count, from }) =>
          `You have ${count} new messages from ${from}1`,

        privateChatToastHeading: "You’ve received a private message1",

        multiplePrivateChatToastHeading: ({ count }) =>
          `You’ve received ${count} private messages1`,

        multiplePublicAndPrivateChatToastHeading:
          "New comments in Public & Private Chat1",
        multiplePublicAndPrivateChatToastSubHeading: ({
          publicChatCount,
          privateChatCount,
          from,
        }) =>
          `You have ${publicChatCount} new messages from ${from} and ${privateChatCount} Private chat1`,

        raiseYourHand: "Raise Your hand1",
        raiseYourHandInfo: "Let everyone know that you've something to say1",
        chatWithOthers: "Chat with others1",
        chatWithOthersInfo: "Message fellow attendees or the hosts1",
        presentYourScreen: "Present Your screen1",
        presentYourScreenInfo: "Be a presenter post the host’s approval1",
        joinWithActivites: "Join in activities1",
        joinWithActivitesInfo: "Jam with everyone on a whiteboard1",

        inviteOtherAttendee: "INVITE OTHER ATTENDEES1",
        waitingForHostToJoin: "Waiting for the host to join1",
        whatYouCanDoHere: "Here's what you can do here :1",

        allowToBePresenter: "ALLOW TO BE A PRESENTER1",
        deny: "DENY1",

        raiseHandRequestToastHeading: "You’ve raised your hand.1",
        raiseHandRequestToastSubHeading:
          "Waiting for host to approve the request1",

        raiseHandRequestReceivedToastHeading: (name) =>
          `${name} has raised their hand to be a Presenter1`,
        raiseHandRequestReceivedToastSubHeading:
          "Once approved they will be able to speak, share their video and present during this call.1",

        raiseHandRequestAcceptedToastHeading:
          "Host has approved your request.1",
        raiseHandRequestAcceptedToastSubHeading: "You are now a Presenter1",

        raiseHandRequestRejectedToastHeading:
          "Your request was rejected by the host1",

        raiseHandRequestRecallToastHeading: (name) =>
          `${name} has lowered their hand1`,

        raiseHandRequestRecallLocalToastHeading: "You’ve lowered your hand.1",

        raiseHandApprovedRequestRecallToastHeading:
          "Host has revoked streaming permissions.1",

        promoteAsCoHostToastHeading: "Host promoted you as a Presenter1",
        requestAlreadyProcessed: "Request already processed.1",
      },
    },
    {
      label: "FR",
      locale: "fr",
      data: {
        settings: "SettingsFR",
      },
    },
  ],
});
export default userCustomization;
