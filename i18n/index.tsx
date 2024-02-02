import { I18nDeviceStatus, customize, ClientRole } from "customization-api";

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
        //share screen ended

        //precall

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

        settingsPanelHeading: "Settings1",

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

        //this info used for livestream vertical
        //to inform the user that they can access device once raise hand is approved
        settingsPanelLiveStreamingAttendeeInfo:
          "Attendees need to raise their hand to access the devices.1",

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
        //vb panel

        //precall
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
