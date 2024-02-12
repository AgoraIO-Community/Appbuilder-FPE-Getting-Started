import {
  ClientRole,
  I18nDeviceStatus,
  I18nMuteType,
  I18nRequestConfirmation,
  NetworkQualities,
  TextDataInterface,
} from "customization-api";

export const hindiTranslationData: TextDataInterface = {
  //create screen started

  //create screen heading
  createRoomHeading: "पार्टी बनाएं",

  //create screen input label
  createRoomInputLabel: "पार्टी का नाम",

  //create screen input placeholder
  createRoomInputPlaceholderText: "नया वर्ष पार्टी",

  //create screen toggle 1 text
  createRoomMakeEveryOneCoHost: "हर किसी को सहोस्ट बनाएं",

  //create screen toggle 1 tooltip
  createRoomMakeEveryOneCoHostTooltipText:
    "सक्षम करने पर सभी को इस पार्टी का नियंत्रण मिलेगा",

  //create screen toggle 2 text
  createRoomAllowPhoneNumberJoining:
    "फ़ोन नंबर के माध्यम से शामिल होने की अनुमति दें",

  //create screen toggle 2 tooltip
  createRoomAllowPhoneNumberJoiningTooltipText:
    "उपस्थितियों को एक नंबर डायल करके और PSTN के माध्यम से शामिल हो सकते हैं",

  //create screen action button
  createRoomBtnText: "पार्टी बनाएं!",

  //to navigate join screem
  createRoomJoinWithID: "पार्टी आईडी के साथ जुड़ें",

  //create success toast heading
  createRoomSuccessToastHeading: (meetingName) =>
    `${meetingName} सफलतापूर्वक बनाई गई है`,

  //create success toast sub heading
  createRoomSuccessToastSubHeading: "आपकी नई पार्टी अब लाइव है",

  //create error toast heading
  createRoomErrorToastHeading: "पार्टी बनाने में त्रुटि!",

  //create error toast sub heading
  createRoomErrorToastSubHeading:
    "क्षमा करें, पार्टी बनाने में समस्या है, कृपया समर्थन से संपर्क करें",

  //create screen ended

  //join screen started

  //heading
  joinRoomHeading: "पार्टी में शामिल हों!",

  //input label
  joinRoomInputLabel: "पार्टी आईडी",

  //placeholder text
  joinRoomInputPlaceHolderText: "पार्टी आईडी दर्ज करें",

  //action button
  joinRoomBtnText: "पार्टी में शामिल हों",

  //secondary button - to navigate to create
  joinRoomCreateBtnText: "पार्टी बनाएं",

  //error toast heading
  joinRoomErrorToastHeading: "पार्टी आईडी अवैध है",
  //error toast sub-heading
  joinRoomErrorToastSubHeading: "कृपया एक वैध पार्टी आईडी दर्ज करें",

  //join screen ended

  //share screen started

  //attendee link label and subtext
  shareRoomAttendeeLinkLabel: "अटेंडी लिंक1",
  shareRoomAttendeeLinkSubText:
    "इसे उन उपस्थितियों के साथ साझा करें जिन्हें आप आमंत्रित करना चाहते हैं।1",

  //host link label and subtext
  shareRoomHostLinkLabel: "होस्ट लिंक1",
  shareRoomHostLinkSubText:
    "इसे उन अन्य सहोस्ट्स के साथ साझा करें जिन्हें आप आमंत्रित करना चाहते हैं।1",

  //PSTN label and subtext
  shareRoomPSTNLabel: "PSTN1",
  shareRoomPSTNNumberLabel: "नंबर1",
  shareRoomPSTNPinLabel: "पिन1",
  shareRoomPSTNSubText:
    "इस फ़ोन नंबर और पिन को फ़ोन से डायल करने के लिए साझा करें।1",

  //tooltip
  shareRoomCopyBtnTooltipText: "क्लिपबोर्ड पर कॉपी किया गया है1",

  //copy invite button
  shareRoomCopyBtnText: "क्लिपबोर्ड पर आमंत्रण कॉपी करें1",

  //action button
  shareRoomStartBtnText: "पार्टी शुरू करें!",

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
          //separate link for host and attendee
          inviteContent += `रूम: ${meetingName}\n\nअटेंडी लिंक:\n${url?.attendee}\n\nहोस्ट लिंक:\n${url?.host}1`;
        } else {
          //single link for everyone
          inviteContent += `रूम: ${meetingName}\n\nमीटिंग लिंक:\n${url?.host}1`;
        }
      }
      //for attendee
      else {
        inviteContent += `रूम: ${meetingName}\n\nअटेंडी लिंक:\n${url?.attendee}1`;
      }
    } else {
      if (isHost) {
        if (isSeparateHostLink) {
          inviteContent += `रूम: ${meetingName}\n\nअटेंडी रूम आईडी:\n${id?.attendee}\n\nहोस्ट रूम आईडी:\n${id?.host}1`;
        } else {
          inviteContent += `रूम: ${meetingName}\n\nरूम आईडी:\n${id?.host}1`;
        }
      } else {
        //copy this label on video call screen
        inviteContent += `रूम: ${meetingName}\n\nअटेंडी रूम आईडी:\n${id?.attendee}1`;
      }
    }
    // Adding PSTN data into meeting data if present
    if (pstn?.number && pstn?.pin) {
      inviteContent += `\n\nPSTN नंबर:\n${pstn.number}\n\nPSTN पिन:\n${pstn.pin}1`;
    }
    return inviteContent;
  },
  //share screen ended

  //precall started

  //permission popup
  //permission popup heading
  permissionPopupHeading: "कैमरा और माइक्रोफोन का उपयोग करने की अनुमति दें1",
  //permission popup sub heading
  permissionPopupSubHeading:
    "दूसरों को आपको देखने और सुनने के लिए 'अनुमति' का चयन करें1",
  //dismiss button text
  permissionPopupDismissBtnText: "खारिज करें1",
  //permission denied - toast heading
  permissionPopupErrorToastHeading: "आपका कैमरा नहीं मिल सका1",
  //permission denied - toast subheading
  permissionPopupErrorToastSubHeading:
    "यह सुनिश्चित करने के लिए अपनी सिस्टम सेटिंग्स की जाँच करें कि कैमरा उपलब्ध है। अगर नहीं, एक जोड़ें और अपने ब्राउज़र को पुनरारंभ करें1",
  //permission popup

  //precall card
  precallYouAreJoiningAsHeading: "आप के रूप में जुड़ रहे हैं1",
  precallNameInputPlaceholderText: "अपना नाम दर्ज करें1",
  precallJoinBtnText: ({ waitingRoom, ready, role }) => {
    if (waitingRoom) {
      return ready
        ? "मांग करें शामिल होने के लिए1"
        : `मंजूरी के लिए प्रतीक्षा कर रहे हैं...1`;
    } else {
      return ready
        ? !role
          ? "पार्टी में शामिल हों"
          : `पार्टी में ${
              role === ClientRole.Broadcaster ? "होस्ट" : "श्रोता"
            } के रूप में शामिल हों`
        : `लोड हो रहा है...1`;
    }
  },
  //precall card

  //settings panel

  settingsPanelHeading: "सेटिंग्स पैनल हेडर",

  //camera dropdown labels
  settingsPanelCameraLabel: "कैमरा1",
  settingsPanelNoCameraDetectedText: "कोई कैमरा नहीं मिला1",
  settingsPanelNoCameraSelectedText: "कोई कैमरा चयन नहीं किया गया है1",

  //microphone dropdown labels
  settingsPanelMicrophoneLabel: "माइक्रोफोन1",
  settingsPanelNoMicrophoneDetectedText: "कोई माइक्रोफोन नहीं मिला1",
  settingsPanelNoMicrophoneSelectedText: "कोई माइक्रोफोन चयन नहीं किया गया है1",

  //speaker dropdown labels
  settingsPanelSpeakerLabel: "स्पीकर1",
  settingsPanelNoSpeakerDetectedText: "कोई स्पीकर नहीं मिला1",
  settingsPanelNoSpeakerSelectedText: "कोई स्पीकर चयन नहीं किया गया है1",
  settingsPanelSystemDefaultSpeakerText: "सिस्टम डिफ़ॉल्ट स्पीकर डिवाइस1",

  //this label used when the system is updating the dropdown values
  settingsPanelUpdatingText: "अद्यतन हो रहा है1",

  //Language dropdown label
  settingsPanelLanguageLabel: "भाषा1",

  //this info used for livestream vertical
  //to inform the user that they can access the device once the raise hand is approved
  settingsPanelLiveStreamingAttendeeInfo:
    "उपस्थितियों को उनके हाथ उठाने पर डिवाइस तक पहुँचने की सूचना है1",

  //applicable only when the whiteboard is enabled and active
  settingPanelNameCantbeChangedInfo: `सफेदबोर्ड सक्रिय है जब तक नाम बदला नहीं जा सकता1`,

  //used in the video call screen
  settingPanelNameInputLabel: "आपका नाम1",

  //settings panel

  //vb panel
  vbPanelHeading: "आभासी पृष्ठभूमि1",
  vbPanelInfo: (isCamOn: boolean) =>
    isCamOn
      ? "कैमरा वर्तमान में बंद है। चयनित पृष्ठभूमि को तब लागू किया जाएगा जब आपका कैमरा चालू होगा1"
      : "आपका कैमरा बंद है। एक पृष्ठभूमि सहेजें ताकि इसे चालू होने पर लागू किया जा सके1",
  vbPanelOptionNoneText: "कोई नहीं1",
  vbPanelOptionBlurText: "धुंध1",
  vbPanelOptionCustomText: "कस्टम1",

  //used in the video call screen
  vbPanelAppliedBtnText: "लागू हुआ1",
  vbPanelApplyBtnText: "लागू करें1",

  //custom file upload error toast
  vbPanelImageUploadErrorToastHeading: "अपलोड असफल हुआ1",
  vbPanelImageUploadErrorToastSubHeading:
    "चयनित छवि पहले से ही अपलोड की गई है1",
  vbPanelImageTypeErrorToastHeading: "अपलोड असफल हुआ1",
  vbPanelImageTypeErrorToastSubHeading:
    "कृपया एक JPG या PNG फ़ाइल का चयन करें1",
  vbPanelImageSizeLimitErrorToastHeading: "अपलोड असफल हुआ1",
  vbPanelImageSizeLimitErrorToastSubHeading:
    "फ़ाइल का आकार 1MB से कम होना चाहिए1",

  //vb panel

  //precall ended

  //videocall started

  //toolbar items- top and bottom and more button

  //bottom left toolbar items
  toolbarItemLayoutText: "लेआउट1",
  toolbarItemLayoutOptionGridText: "ग्रिड1",
  toolbarItemLayoutOptionSidebarText: "साइडबार1",
  toolbarItemInviteText: "आमंत्रित1",

  //center toolbar items
  toolbarItemMicrophoneText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "माइक चालू1";
      case I18nDeviceStatus.OFF:
        return "माइक बंद1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "माइक1";
      default:
        return "माइक1";
    }
  },
  toolbarItemMicrophoneTooltipText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "माइक बंद करें1";
      case I18nDeviceStatus.OFF:
        return "माइक चालू करें1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "अनुमतियाँ दें1";
      default:
        return "माइक1";
    }
  },
  toolbarItemCameraText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "वीडियो चालू1";
      case I18nDeviceStatus.OFF:
        return "वीडियो बंद1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "वीडियो1";
      default:
        return "वीडियो1";
    }
  },
  toolbarItemCameraTooltipText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "कैमरा बंद करें1";
      case I18nDeviceStatus.OFF:
        return "कैमरा चालू करें1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "अनुमतियाँ दें1";
      default:
        return "वीडियो1";
    }
  },
  toolbarItemShareText: (active) => (active ? "साझा करें बंद1" : "साझा करें1"),
  toolbarItemRecordingText: (active) =>
    active ? "रिकॉर्ड बंद करें1" : "रिकॉर्ड1",
  toolbarItemLeaveText: "छोड़ें1",
  toolbarItemMoreText: "अधिक1",

  //more button items
  toolbarItemNoiseCancellationText: "शोर समाप्ति1",
  toolbarItemVirtualBackgroundText: "आभासी पृष्ठभूमि1",
  toolbarItemWhiteboardText: (active) =>
    active ? "सफेदबोर्ड छुपाएं1" : "सफेदबोर्ड दिखाएं1",
  toolbarItemCaptionText: (active) =>
    active ? "कैप्शन छुपाएं1" : "कैप्शन दिखाएं1",
  toolbarItemTranscriptText: (active) =>
    active ? "ट्रांसक्रिप्ट छुपाएं1" : "ट्रांसक्रिप्ट दिखाएं1",

  toolbarItemRaiseHandText: (active) =>
    active ? "हैंड नीचे करें1" : "हैंड उठाएं1",

  //top right toolbar items
  toolbarItemPeopleText: "लोग1",
  toolbarItemChatText: "चैट1",
  toolbarItemSettingText: "सेटिंग्स1",

  livestreamingMicrophoneTooltipText: (isHandRaised) =>
    isHandRaised
      ? "मेज़बान की मंजूरी का इंतजार है1"
      : "माइक चालू करने के लिए हैंड उठाएं1",
  livestreamingCameraTooltipText: (isHandRaised) =>
    isHandRaised
      ? "मेज़बान की मंजूरी का इंतजार है1"
      : "वीडियो चालू करने के लिए हैंड उठाएं1",
  livestreamingShareTooltipText: (isHandRaised) =>
    isHandRaised
      ? "मेज़बान की मंजूरी का इंतजार है1"
      : "प्रस्तुत करने के लिए हैंड उठाएं1",

  //videocall

  //invite title label - if only one user on the call
  inviteTileWelcomeText: "स्वागत1",
  inviteTileNoElseJoinedYetText: "अब तक कोई और जुड़ा नहीं है1",
  inviteTileCopyInviteBtnText: "आमंत्रण कॉपी करें1",
  //invite title label - if only one user on the call

  //invite popup
  invitePopupHeading: "इस कक्ष में दूसरों को आमंत्रित करें1",
  invitePopupPrimaryBtnText: "आमंत्रण कॉपी करें1",
  //invite popup

  pstnUserLabel: "PSTN उपयोगकर्ता1",

  //video title network quality label
  //it will be displayed on hover
  videoTileNetworkQuailtyLabel: (quality: NetworkQualities) => {
    switch (quality) {
      case "unknown":
        return "नेटवर्क समर्थन नहीं है1";
      case "excellent":
        return "उत्कृष्ट नेटवर्क1";
      case "good":
        return "अच्छा नेटवर्क1";
      case "bad":
        return "बुरा नेटवर्क1";
      case "veryBad":
        return "बहुत बुरा नेटवर्क1";
      case "unpublished":
        return "नेटवर्क अप्रकटित1";
      case "loading":
        return "लोड हो रहा है1";
      default:
        return "लोड हो रहा है1";
    }
  },
  //more button label on video tile and participant
  moreBtnViewWhiteboard: "व्हाइटबोर्ड देखें1",
  moreBtnRemoveFromLarge: "बड़े से हटाएं1",
  moreBtnViewInLarge: "बड़े में देखें1",
  moreBtnPinToTop: "शीर्ष पर पिन करें1",
  moreBtnRemoveFromTop: "शीर्ष से हटाएं1",
  moreBtnMessagePrivately: "व्यक्तिगत संदेश1",
  moreBtnAudio: (audio) =>
    audio ? "ध्वनि म्यूट करें1" : "ध्वनि का अनुरोध करें1",
  moreBtnVideo: (video) =>
    video ? "वीडियो म्यूट करें1" : "वीडियो का अनुरोध करें1",
  moreBtnAddAsPresenter: "प्रस्तुतकर्ता के रूप में जोड़ें1",
  moreBtnRemoveAsPresenter: "प्रस्तुतकर्ता के रूप में से हटाएं1",
  moreBtnRemoveFromRoom: "कक्ष से हटाएं1",
  moreBtnChangeName: "नाम बदलें1",
  moreBtnStopScreenShare: "स्क्रीन शेयर बंद करें1",
  moreBtnRemoveScreenShare: "स्क्रीन शेयर हटाएं1",

  // native screen share popup
  // in mobile device camera need to be turn off in order to share the screen
  // this popup is used to alert the camera will be turn off
  nativeScreensharePopupHeading: "स्क्रीन शेयर1",
  nativeScreensharePopupSubHeading: (camActive) =>
    camActive
      ? "नोट: एक अनुकूलित प्रदर्शन के लिए कैमरा और सभी आउटगोइंग वीडियो बंद कर दिए जाएंगे, क्या आप आगे बढ़ना चाहते हैं?1"
      : "नोट: एक अनुकूलित प्रदर्शन के लिए सभी आउटगोइंग वीडियो बंद कर दिए जाएंगे, क्या आप आगे बढ़ना चाहते हैं?1",
  nativeScreensharePopupPrimaryBtnText: "आगे बढ़ें1",
  nativeScreensharePopupIncludeDeviceAudioText: "डिवाइस ऑडियो शामिल करें1",

  //when user tries to turn on the camera While screensharing is going
  //we will alert the user to turn off the screen share to continue
  nativeStopScreensharePopupHeading: "स्क्रीन शेयर बंद करें?1",
  nativeStopScreensharePopupSubHeading:
    "कैमरा चालू करने के लिए आपको अपने स्क्रीन शेयरिंग बंद करनी होगी1",
  nativeStopScreensharePopupPrimaryBtnText: "शेयर बंद करें और कैमरा चालू करें1",

  //stop recording popup - confirmation popup to stop recording
  stopRecordingPopupHeading: "रिकॉर्ड बंद करें?1",
  stopRecordingPopupSubHeading:
    "क्या आप सुनिश्चित हैं कि आप रिकॉर्डिंग बंद करना चाहते हैं? आप इस क्रिया को पूर्वानुमान नहीं कर सकते1",
  stopRecordingPopupPrimaryBtnText: "रिकॉर्डिंग समाप्त करें1",

  //clear all whiteboard popup - confirmation popup to clear all content drawn and uploaded in the whiteboard
  clearAllWhiteboardPopupHeading: "सफेदबोर्ड साफ करें?1",
  clearAllWhiteboardPopupSubHeading:
    "क्या आप सुनिश्चित हैं कि आप सभी सामग्री को सफेदबोर्ड से हटाना चाहते हैं?1",
  clearAllWhiteboardPopupPrimaryBtnText: "सभी को साफ करें1",

  //leave room popup - confirmation popup before leaving the room
  leaveRoomPopupHeading: "कक्ष छोड़ें?1",
  leaveRoomPopupSubHeading: (transcriptDownloadAvailable) =>
    transcriptDownloadAvailable
      ? `क्या आप निश्चित हैं कि आप जाना चाहते हैं? आपने अब तक अपने ट्रांसक्रिप्ट को डाउनलोड नहीं किया है1`
      : "क्या आप सुनिश्चित हैं कि आप इस मीटिंग को छोड़ना चाहते हैं?1",
  leaveRoomPopupPrimaryBtnText: "छोड़ें1",

  //remove user popup - confirmation popup to remove the user from the call
  removeUserFromRoomPopupHeading: (name) => `${name} को हटाएं?1`,
  removeUserFromRoomPopupSubHeading: (name) =>
    `${name} को एक बार हटा दिया जाएगा, वह बाद में कक्ष में पुनः जुड़ सकेगा1`,
  removeUserFromRoomPopupPrimaryBtnText: "हटाएं1",

  //toast to inform user once that host removed you from the call
  userRemovedFromTheRoomToastHeading: (name) =>
    `सिस्टम ${name} को इस कॉल से 5 सेकंड के बाद हटा देगा1`,

  //remove screenshare popup - confirmation popup to remove the screenshare from the call
  removeScreenshareFromRoomPopupHeading: "स्क्रीन शेयर हटाएं?1",
  removeScreenshareFromRoomPopupSubHeading: (name) =>
    `एक बार हटा दिया जाएगा, ${name} बाद में भी स्क्रीन शेयर कर सकेगा1`,
  removeScreenshareFromRoomPopupPrimaryBtnText: "हटाएं1",

  //stt related labels

  //change spoken language poup
  sttChangeSpokenLanguagePopupHeading: (isFirstTimeOpened) =>
    isFirstTimeOpened
      ? "बोली जाने वाली भाषा सेट करें1"
      : "बोली जाने वाली भाषा बदलें1",
  sttChangeSpokenLanguagePopupSubHeading:
    "इस मीटिंग में सभी क्या भाषा(एँ) बोल रहे हैं?1",
  sttChangeSpokenLanguagePopupPrimaryBtnText: "पुष्टि करें1",
  sttChangeSpokenLanguagePopupDropdownInfo: "आप अधिकतम दो भाषाएँ चुन सकते हैं1",
  sttChangeSpokenLanguagePopupDropdownError:
    "आगे बढ़ने के लिए कृपया कम से कम एक भाषा चुनें1",
  sttChangeSpokenLanguageText: "बोली जाने वाली भाषा बदलें1",

  //transcript related
  sttTranscriptPanelHeaderText: "मीटिंग ट्रांसक्रिप्ट1",
  sttDownloadBtnText: "डाउनलोड1",
  sttDownloadTranscriptBtnText: "ट्रांसक्रिप्ट डाउनलोड1",
  sttSettingSpokenLanguageText: "बोली जाने वाली भाषा सेट कर रहे हैं1",
  sttLanguageChangeInProgress: "भाषा परिवर्तन प्रगति में है...1",

  sttTranscriptPanelSearchText: "खोजें1",
  sttTranscriptPanelNoSearchResultsFoundText: "कोई खोज परिणाम नहीं मिला1",
  sttTranscriptPanelViewLatestText: "नवीनतम देखें1",

  sttSpokenLanguageToastHeading: (action) => `बोली जाने वाली भाषा ${action}1`,
  sttSpokenLanguageToastSubHeading: ({
    action,
    newLanguage,
    oldLanguage,
    username,
  }) =>
    action === "Set"
      ? `${username} ने बोली जाने वाली भाषा को "${newLanguage}" सेट की है1`
      : `${username} ने बोली जाने वाली भाषा को "${oldLanguage}" से ${newLanguage} में बदल दिया है1`,

  //Side panel labels
  peoplePanelHeaderText: "लोग1",

  //people panel host controls labels
  peoplePanelTurnoffAllCameraBtnText: "सभी कैमरे बंद करें1",
  peoplePanelMuteAllMicBtnText: "सभी को म्यूट करें1",

  //people panel labels
  peoplePanelHostSectionHeaderText: "होस्ट1",
  peoplePanelAudienceSectionHeaderText: "दर्शक1",
  peoplePanelInThisMeetingLabel: "इस मीटिंग में1",
  peoplePanelNoHostJoinedContent: "अबतक कोई होस्ट नहीं जुड़ा है1",
  peoplePanelNoAudienceJoinedContent: "अबतक कोई दर्शक नहीं जुड़ा है1",
  peoplePanelNoUsersJoinedContent: "अबतक कोई उपयोगकर्ता नहीं जुड़ा है1",
  peoplePanelWantToJoinText: "जुड़ना चाहते हैं1",
  peoplePanelWaitingText: "प्रतीक्षा कर रहा है1",

  peoplePanelMeText: "मैं1",
  peoplePanelPresenterText: "प्रस्तुतकर्ता1",

  peoplePanelWaitingRoomRequestApprovalBtnTxt: "स्वीकार करें1",
  peoplePanelWaitingRoomRequestDenyBtnTxt: "नकार करें1",
  peoplePanelUserNotFoundLabel: "उपयोगकर्ता नहीं मिला1",
  peoplePanelStreamingRequestSectionHeader: "स्ट्रीमिंग अनुरोध1",
  peoplePanelLivestreamingApprovalBtnText: "स्वीकृत करें1",
  peoplePanelLivestreamingDenyBtnText: "नकार करें1",

  waitingRoomApprovalRequiredToastHeading: "मंजूरी आवश्यक1",
  waitingRoomApprovalRequiredToastSubHeading: (username) =>
    `${username} का इंतजार है कि कॉल में शामिल होने के लिए1`,
  waitingRoomApprovalRequiredPrimaryBtnText: "स्वीकार करें1",
  waitingRoomApprovalRequiredSecondaryBtnText: "नकार करें1",

  //people panel waiting room approval rejection toast
  waitingRoomApprovalRejectionToastHeading: "अनुमोदन आवश्यक1",
  waitingRoomApprovalRejectionToastSubHeading:
    "मेज़बान ने मीटिंग में प्रवेश की अनुमति को इनकार किया गया था1",

  //people panel confirmation popover
  muteAllConfirmationPopoverContent: (type: I18nMuteType) =>
    `क्या आप सभी की ${type} को कैमरे से बंद करना चाहते हैं?1`,
  requestConfirmationPopoverContent: ({ name, type }) =>
    `${name} से उनके ${
      type === I18nMuteType.audio ? "माइक्रोफ़ोन" : "कैमरा"
    } को चालू करने का अनुरोध करें?1`,
  muteConfirmationPopoverContent: ({ name, type }) =>
    `${name} के ${type} को कैमरे से सभी के लिए म्यूट करें? केवल ${name} अपने आप को अनम्यूट कर सकते हैं1`,

  //mute/request popover action button
  muteAllConfirmationPopoverPrimaryBtnText: "सभी को म्यूट करें1",
  muteConfirmationPopoverPrimaryBtnText: "म्यूट करें1",
  requestConfirmationPopoverPrimaryBtnText: "अनुरोध करें1",

  //chat
  //chat sub tab labels
  chatPanelGroupTabText: "समूह1",
  chatPanelPrivateTabText: "व्यक्तिगत1",
  chatPanelUserOfflineText: "उपयोगकर्ता ऑफलाइन है1",
  chatPanelUnreadMessageText: "अपठित संदेश1",

  //chat container placeholder content
  groupChatWelcomeContent: (noMessage) =>
    noMessage
      ? "चैट में आपका स्वागत है!1\nसभी संदेश कॉल समाप्त होने पर हटा दिए जाते हैं1"
      : "सभी संदेश कॉल समाप्त होने पर हटा दिए जाते हैं1",

  //chat input box placeholder text
  groupChatInputPlaceHolderText: (name) =>
    `सार्वजनिक रूप से ${name} के रूप में चैट करें...1`,
  privateChatInputPlaceHolderText: (name) => `${name} को व्यक्तिगत संदेश1`,

  //chat toast notification

  //single user public chat
  publicChatToastHeading: (name: string) =>
    `${name} ने सार्वजनिक चैट में टिप्पणी की है1`,

  //multiple user public chat
  multiplePublicChatToastHeading: "सार्वजनिक चैट में नई टिप्पणियां1",
  multiplePublicChatToastSubHeading: ({ count, from }) =>
    `आपके पास ${count} नए संदेश हैं ${from} से1`,

  //private chat
  privateChatToastHeading: "आपको एक व्यक्तिगत संदेश मिला है1",

  //single private chat message
  multiplePrivateChatToastHeading: ({ count }) =>
    `आपको ${count} व्यक्तिगत संदेश मिले हैं1`,

  //multiple private chat and public chat message
  multiplePublicAndPrivateChatToastHeading:
    "सार्वजनिक और व्यक्तिगत चैट में नई टिप्पणियां1",
  multiplePublicAndPrivateChatToastSubHeading: ({
    publicChatCount,
    privateChatCount,
    from,
  }) =>
    `आपके पास ${from} से ${publicChatCount} नए संदेश और ${privateChatCount} व्यक्तिगत चैट हैं1`,

  //livestreaming attendee info tile
  //it will shown to livestreaming attendee when host is not joined.
  livestreamingAttendeeWhatYouCanDoText: "यहां आप क्या कर सकते हैं:1",
  livestreamingAttendeeInviteOthersText: "अन्य उपयोगकर्ताओं को आमंत्रित करें1",
  livestreamingAttendeeWaitingForHostToJoinText:
    "होस्ट के जुड़ने का इंतजार है1",

  livestreamingAttendeeRaiseHandInfoHeading: "अपना हाथ बढ़ाएं1",
  livestreamingAttendeeRaiseHandInfoSubHeading:
    "सभी को बताएं कि आपके पास कुछ कहने का कुछ है1",
  livestreamingAttendeeChatWithOthersInfoHeading: "दूसरों के साथ चैट करें1",
  livestreamingAttendeeChatWithOthersInfoSubHeading:
    "साथी उपयोगकर्ताओं या होस्ट्स को संदेश भेजें1",
  livestreamingAttendeePresentYourScreenInfoHeading:
    "अपनी स्क्रीन प्रस्तुत करें1",
  livestreamingAttendeePresentYourScreenInfoSubHeading:
    "होस्ट के स्वीकृति के बाद प्रस्तुतकर्ता बनें1",
  livestreamingAttendeeJoinWithActivitiesInfoHeading:
    "गतिविधियों में शामिल हों1",
  livestreamingAttendeeJoinWithActivitiesInfoSubHeading:
    "सभी के साथ व्हाइटबोर्ड पर जैम करें1",

  //livestreaming notification and buttons labels

  livestreamRaiseHandRequestToastHeading: "आपने अपना हाथ बढ़ा दिया है1",
  livestreamRaiseHandRequestToastSubHeading: "होस्ट की मंजूरी का इंतजार है1",

  livestreamRaiseHandRequestReceivedToastHeading: (name) =>
    `${name} ने प्रस्तुतकर्ता बनने के लिए अपना हाथ बढ़ाया है1`,
  livestreamRaiseHandRequestReceivedToastSubHeading:
    "एक बार मंजूरी होने पर उन्हें बोलने, अपनी वीडियो साझा करने और इस कॉल के दौरान प्रस्तुति करने का अधिकार होगा1",

  livestreamRaiseHandRequestAcceptedToastHeading:
    "होस्ट ने आपकी अनुरोध को स्वीकृत किया है1",
  livestreamRaiseHandRequestAcceptedToastSubHeading: "आप अब प्रस्तुतकर्ता हैं1",

  livestreamRaiseHandRequestRejectedToastHeading:
    "आपका अनुरोध होस्ट द्वारा अस्वीकृत किया गया था1",

  livestreamRaiseHandRequestRecallToastHeading: (name) =>
    `${name} ने अपना हाथ नीचे कर लिया है1`,

  livestreamRaiseHandRequestRecallLocalToastHeading:
    "आपने अपना हाथ नीचे कर लिया है1",

  livestreamRaiseHandApprovedRequestRecallToastHeading:
    "होस्ट ने स्ट्रीमिंग अनुमतियां वापस लेली हैं1",

  livestreamPromoteAsCoHostToastHeading:
    "होस्ट ने आपको प्रस्तुतकर्ता के रूप में बढ़ाया है1",
  livestreamRequestAlreadyProcessed: "अनुरोध पहले ही प्रस्तुत है1",

  //livestreaming toast action button
  livestreamToastApprovalBtnText: "प्रस्तुतकर्ता बनने की अनुमति दें1",
  livestreamToastDenyBtnText: "इनकार1",

  videoRoomUserFallbackText: "उपयोगकर्ता1",

  videoRoomRecordingText: "रेकॉर्डिंग1",
  videoRoomGoToActiveSpeakerText: "सक्रिय वक्ता के पास जाएँ1",
  videoRoomScreenshareText: (username) => `${username} का स्क्रीन शेयर1`,
  videoRoomStartingCallText: "कॉल शुरू हो रही है. बस एक सेकंड1",

  videoRoomScreenshareOverlayText: "आप अपनी स्क्रीन साझा कर रहे हैं1",
  videoRoomScreenshareStopSharingBtnText: "साझा करना बंद करें1",
  videoRoomScreenShareErrorToastHeading:
    "स्क्रीन साझा करने का प्रारंभ करने में विफल1",
  videoRoomScreenShareErrorToastSubHeading: "अनुमति नकारा1",

  videoRoomRecordingToastHeading: (active) =>
    active ? "रेकॉर्डिंग शुरू हो गई है1" : "रेकॉर्डिंग बंद हो गई है1",
  videoRoomRecordingToastSubHeading: (name) =>
    `इस कमरे की रेकॉर्डिंग ${name} द्वारा की जा रही है1`,

  //topbar people count onhover tooltip text
  videoRoomPeopleCountTooltipHostText: "मेज़बान1",
  videoRoomPeopleCountTooltipAttendeeText: "दर्शक1",

  //whiteboard label
  whiteboardInitializingText: "व्हाइटबोर्ड प्रारंभ हो रहा है1",

  //whiteboard widget labels
  whiteboardWidgetViewOnlyText: "केवल देखें1",
  whiteboardWidgetZoomInText: "ज़ूम इन करें1",
  whiteboardWidgetZoomOutText: "ज़ूम आउट करें1",
  whiteboardWidgetFitToScreenText: "स्क्रीन को फिट करें1",
  whiteboardWidgetRedoText: "पुनः करें1",
  whiteboardWidgetUndoText: "पूर्ववत करें1",
  whiteboardWidgetExportToCloudText: "क्लाउड में निर्यात करें1",

  //whiteboard toolbox
  whiteboardToolboxSelectText: "चयन करें1",
  whiteboardToolboxTextFormatting: "टेक्स्ट1",
  whiteboardToolboxMoveText: "हिलाएँ1",
  whiteboardToolboxLaserText: "लेज़र1",
  whiteboardToolboxEraseText: "मिटाएँ1",
  whiteboardToolboxUploadText: "दस्तावेज़ या छवि अपलोड करें1",
  whiteboardToolboxClearAllText: "सभी को साफ करें1",
  whiteboardToolboxWidthLabel: "चौड़ाई1",
  whiteboardToolboxPxLabel: " पिक्सेल1",

  //whiteboard toast

  //whiteboard export toast
  whiteboardExportErrorToastHeading: "व्हाइटबोर्ड निर्यात करने में विफल1",
  whiteboardExportInfoToastHeading:
    "कृपया कुछ सेकंडों का प्रतीक्षा करें ताकि व्हाइटबोर्ड के स्क्रीनशॉट लिंक मिल सके1",
  whiteboardExportSuccessToastHeading:
    "व्हाइटबोर्ड को एक छवि के रूप में निर्यात किया गया है। लिंक क्लिपबोर्ड पर कॉपी हो गई है1",

  //whiteboard file upload
  whiteboardFileUploadErrorToastHeading: (type) =>
    `${type} अपलोड करते समय त्रुटि हुई, कृपया पुनः प्रयास करें1`,
  whiteboardFileUploadInfoToastHeading: (type) =>
    `${type} अपलोड होने में कुछ सेकंड्स लग सकते हैं ताकि व्हाइटबोर्ड में प्रदर्शित हो1`,
  whiteboardFileUploadTypeErrorToastHeading: () => "असमर्थित फ़ाइल1",
  whiteboardFileUploadTypeErrorToastSubHeading: () =>
    "कृपया पीडीएफ, डॉक, डॉक्स, पीपीटी, पीपीटीएक्स, पीएनजी, जेपीजी, जेपीईजी स्वरूप की फ़ाइल का चयन करें1",

  deviceDetectionToastHeading: (name) => `नया ${name} पहचाना गया है1`,
  deviceDetectionToastSubHeading: ({ name, label }) =>
    `नया ${name} जिसका नाम ${label} है, पहचाना गया है। क्या आप स्विच करना चाहेंगे?1`,
  deviceDetectionPrimaryBtnText: "डिवाइस बदलें1",
  deviceDetectionSecondaryBtnText: "इनकार करें1",
  deviceDetectionCheckboxText: "मेरी राय याद रखें1",

  hostMutedUserToastHeading: (type) =>
    type === "audio"
      ? "होस्ट ने आपकी ध्वनि को म्यूट किया है1"
      : "होस्ट ने आपकी वीडियो को म्यूट किया है1",
  hostRequestedUserToastHeading: (type) =>
    type === "audio"
      ? "होस्ट ने आपसे कहा है कि आप बोलें1"
      : "होस्ट ने आपसे कहा है कि आप अपनी वीडियो शुरू करें1",
  hostRequestedUserToastPrimaryBtnText: () => "अनम्यूट करें1",
  hostRequestedUserToastSecondaryBtnText: () => "बाद में1",
  hostRemovedUserToastHeading: "होस्ट ने आपको कमरे से हटा दिया है1",

  //common labels
  cancelText: "रद्द करें1",
  loadingText: "लोड हो रहा है...",
  //common labels

  //auth/login related labels

  //logout confirmation popup
  logoutText: "लॉगआउट1",
  authLogoutPopupHeading: "लॉगआउट?1",
  authLogoutPopupSubHeading: "क्या आप वाकई लॉगआउट करना चाहते हैं?1",
  authLogoutPopupPrimaryBtnText: "पुष्टि करें1",

  //native popup to require authentication if login enabled
  authLogInRequiredPopupHeading: "लॉगिन आवश्यक है1",
  authLogInRequiredPopupSubHeading:
    "जारी रखने के लिए अपने संगठन में लॉग-इन करें1",
  authLogInRequiredPopupPrimaryBtnText: "लॉगिन करें1",
  authLogInRequiredPopupSecondaryBtnText: "ऐप बंद करें1",

  //auth login error toast
  authSessionTimeoutToastHeading:
    "आपका सत्र समाप्त हो गया है, पुन: प्रयास कर रहा हूँ...1",
  authErrorOnLoginToastHeading: "लॉगिन पर त्रुटि हुई, कृपया पुन: लॉगिन करें1",
  authAuthenticationFailedText: "प्रमाणीकरण असफल हुआ है1",
  authAuthorizingApplicationText: "ऐप को अधिरोहित किया जा रहा है...1",
};
