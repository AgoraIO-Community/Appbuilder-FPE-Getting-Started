import {
  ClientRole,
  I18nDeviceStatus,
  I18nMuteType,
  I18nRequestConfirmation,
  NetworkQualities,
  TextDataInterface,
} from "customization-api";

export const chineseTranslationData: TextDataInterface = {
  //create screen started

  //create screen heading
  createRoomHeading: "创建聚会",

  //create screen input label
  createRoomInputLabel: "聚会名称",

  //create screen input placeholder
  createRoomInputPlaceholderText: "新年聚会",

  //create screen toggle 1 text
  createRoomMakeEveryOneCoHost: "使每个人成为联合主持人1",

  //create screen toggle 1 tooltip
  createRoomMakeEveryOneCoHostTooltipText: "打开将使每个人控制此聚会1",

  //create screen toggle 2 text
  createRoomAllowPhoneNumberJoining: "允许通过电话号码加入1",

  //create screen toggle 2 tooltip
  createRoomAllowPhoneNumberJoiningTooltipText:
    "与会者可以拨打号码并通过 PSTN 加入1",

  //create screen action button
  createRoomBtnText: "创建聚会!",

  //to navigate join screem
  createRoomJoinWithID: "使用聚会ID加入",

  //create success toast heading
  createRoomSuccessToastHeading: (meetingName) => `${meetingName} 已创建1`,

  //create success toast sub heading
  createRoomSuccessToastSubHeading: "您的新聚会现在已经开始",

  //create error toast heading
  createRoomErrorToastHeading: "创建聚会时出错!",

  //create error toast sub heading
  createRoomErrorToastSubHeading: "抱歉，创建聚会时出现问题，请联系支持",

  //create screen ended

  //join screen started

  //heading
  joinRoomHeading: "加入聚会!",

  //input label
  joinRoomInputLabel: "聚会ID",

  //placeholder text
  joinRoomInputPlaceHolderText: "输入聚会ID",

  //action button
  joinRoomBtnText: "加入聚会",

  //secondary button - to navigate to create
  joinRoomCreateBtnText: "创建聚会",

  //error toast heading
  joinRoomErrorToastHeading: "聚会ID无效",
  //error toast sub-heading
  joinRoomErrorToastSubHeading: "请输入有效的聚会ID",

  //join screen ended

  //share screen started

  //attendee link label and subtext
  shareRoomAttendeeLinkLabel: "与会者链接1",
  shareRoomAttendeeLinkSubText: "与您想邀请的与会者分享此链接1",

  //host link label and subtext
  shareRoomHostLinkLabel: "主持人链接1",
  shareRoomHostLinkSubText: "与您想邀请的其他联合主持人分享此链接1",

  //PSTN label and subtext
  shareRoomPSTNLabel: "PSTN1",
  shareRoomPSTNNumberLabel: "号码1",
  shareRoomPSTNPinLabel: "PIN1",
  shareRoomPSTNSubText: "与会者可以拨打这个号码并输入PIN加入1",

  //tooltip
  shareRoomCopyBtnTooltipText: "已复制到剪贴板1",

  //copy invite button
  shareRoomCopyBtnText: "复制邀请到剪贴板1",

  //action button
  shareRoomStartBtnText: "开始聚会!",

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
          inviteContent += `房间：${meetingName}\n\n与会者链接：\n${url?.attendee}\n\n主持人链接：\n${url?.host}1`;
        } else {
          //single link for everyone
          inviteContent += `房间：${meetingName}\n\n会议链接：\n${url?.host}1`;
        }
      }
      //for attendee
      else {
        inviteContent += `房间：${meetingName}\n\n与会者链接：\n${url?.attendee}1`;
      }
    } else {
      if (isHost) {
        if (isSeparateHostLink) {
          inviteContent += `房间：${meetingName}\n\n与会者房间ID：\n${id?.attendee}\n\n主持人房间ID：\n${id?.host}1`;
        } else {
          inviteContent += `房间：${meetingName}\n\n房间ID：\n${id?.host}1`;
        }
      } else {
        //copy this label on videocall screen
        inviteContent += `房间：${meetingName}\n\n与会者房间ID：\n${id?.attendee}1`;
      }
    }
    // Adding pstn data into meeting data if present
    if (pstn?.number && pstn?.pin) {
      inviteContent += `\n\nPSTN 号码：\n${pstn.number}\n\nPSTN PIN：\n${pstn.pin}1`;
    }
    return inviteContent;
  },
  //share screen ended

  //precall started
  //permission popup
  //permission popup heading
  permissionPopupHeading: "允许访问摄像头和麦克风1",
  //permission popup sub heading
  permissionPopupSubHeading: "选择“允许”，让其他人看到并听到您1",
  //dismiss button text
  permissionPopupDismissBtnText: "忽略1",
  //permission denied - toast heading
  permissionPopupErrorToastHeading: "找不到您的摄像头1",
  //permission denied - toast subheading
  permissionPopupErrorToastSubHeading:
    "检查系统设置，确保有可用的摄像头。如果没有，请插入一个并重新启动浏览器1",
  //permission popup

  //precall card
  precallYouAreJoiningAsHeading: "您正在以1身份加入",
  precallNameInputPlaceholderText: "输入您的姓名1",
  precallJoinBtnText: ({ waitingRoom, ready, role }) => {
    if (waitingRoom) {
      return ready ? "请求加入1" : `等待批准...1`;
    } else {
      return ready
        ? !role
          ? "加入聚会"
          : `以${
              role === ClientRole.Broadcaster ? "主持人" : "听众"
            }的身份加入聚会`
        : `正在加载...1`;
    }
  },
  //precall card

  //settings panel

  settingsPanelHeading: "设置面板标题",

  //camera dropdown labels
  settingsPanelCameraLabel: "摄像头1",
  settingsPanelNoCameraDetectedText: "未检测到摄像头1",
  settingsPanelNoCameraSelectedText: "未选择摄像头1",

  //microphone dropdown labels
  settingsPanelMicrophoneLabel: "麦克风1",
  settingsPanelNoMicrophoneDetectedText: "未检测到麦克风1",
  settingsPanelNoMicrophoneSelectedText: "未选择麦克风1",

  //speaker dropdown labels
  settingsPanelSpeakerLabel: "扬声器1",
  settingsPanelNoSpeakerDetectedText: "未检测到扬声器1",
  settingsPanelNoSpeakerSelectedText: "未选择扬声器1",
  settingsPanelSystemDefaultSpeakerText: "系统默认扬声器设备1",

  //this label used when system updating the dropdown values
  settingsPanelUpdatingText: "更新中1",

  //Language dropdown label
  settingsPanelLanguageLabel: "语言1",

  //this info used for livestream vertical
  //to inform the user that they can access device once raise hand is approved
  settingsPanelLiveStreamingAttendeeInfo: "与会者需要举手以访问设备1",

  //applicable only when whiteboard is enabled and active
  settingPanelNameCantbeChangedInfo: `在白板激活时无法更改名称1`,

  //used in the videocall screen
  settingPanelNameInputLabel: "您的姓名1",

  //settings panel

  //vb panel
  vbPanelHeading: "虚拟背景1",
  vbPanelInfo: (isCamOn) =>
    isCamOn
      ? "摄像头当前已关闭。一旦您的摄像头打开，所选的背景将被应用1"
      : "您的摄像头已关闭。保存一个背景，以便一旦打开摄像头就会应用1",
  vbPanelOptionNoneText: "无1",
  vbPanelOptionBlurText: "模糊1",
  vbPanelOptionCustomText: "自定义1",

  //used in the videocall screen
  vbPanelAppliedBtnText: "已应用1",
  vbPanelApplyBtnText: "应用1",

  //custom file upload error toast
  vbPanelImageUploadErrorToastHeading: "上传失败1",
  vbPanelImageUploadErrorToastSubHeading: "所选图像已上传1",
  vbPanelImageTypeErrorToastHeading: "上传失败1",
  vbPanelImageTypeErrorToastSubHeading: "请选择 JPG 或 PNG 文件1",
  vbPanelImageSizeLimitErrorToastHeading: "上传失败1",
  vbPanelImageSizeLimitErrorToastSubHeading: "文件大小必须小于1MB1",

  //vb panel

  //precall ended

  //videocall started

  //toolbar items- top and bottom and more button

  //bottom left toolbar items
  toolbarItemLayoutText: "布局1",
  toolbarItemLayoutOptionGridText: "网格1",
  toolbarItemLayoutOptionSidebarText: "侧边栏1",
  toolbarItemInviteText: "邀请1",

  //center toolbar items
  toolbarItemMicrophoneText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "麦克风已开启1";
      case I18nDeviceStatus.OFF:
        return "麦克风已关闭1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "麦克风1";
      default:
        return "麦克风1";
    }
  },
  toolbarItemMicrophoneTooltipText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "禁用麦克风1";
      case I18nDeviceStatus.OFF:
        return "启用麦克风1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "授予权限1";
      default:
        return "麦克风1";
    }
  },
  toolbarItemCameraText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "视频已开启1";
      case I18nDeviceStatus.OFF:
        return "视频已关闭1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "视频1";
      default:
        return "视频1";
    }
  },
  toolbarItemCameraTooltipText: (deviceStatus) => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return "禁用摄像头1";
      case I18nDeviceStatus.OFF:
        return "启用摄像头1";
      case I18nDeviceStatus.PERMISSION_DENIED:
        return "授予权限1";
      default:
        return "视频1";
    }
  },
  toolbarItemShareText: (active) => (active ? "停止共享1" : "共享1"),
  toolbarItemRecordingText: (active) => (active ? "停止录制1" : "录制1"),
  toolbarItemLeaveText: "离开1",
  toolbarItemMoreText: "更多1",

  //more button items
  toolbarItemNoiseCancellationText: "降噪1",
  toolbarItemVirtualBackgroundText: "虚拟背景1",
  toolbarItemWhiteboardText: (active) => (active ? "隐藏白板1" : "显示白板1"),
  toolbarItemCaptionText: (active) => (active ? "隐藏字幕1" : "显示字幕1"),
  toolbarItemTranscriptText: (active) => (active ? "隐藏文本1" : "显示文本1"),

  toolbarItemRaiseHandText: (active) => (active ? "放下手1" : "举手1"),

  //top right toolbar items
  toolbarItemPeopleText: "人员1",
  toolbarItemChatText: "聊天1",
  toolbarItemSettingText: "设置1",

  livestreamingMicrophoneTooltipText: (isHandRaised) =>
    isHandRaised ? "等待主持人批准请求1" : "举手以打开麦克风1",
  livestreamingCameraTooltipText: (isHandRaised) =>
    isHandRaised ? "等待主持人批准请求1" : "举手以打开视频1",
  livestreamingShareTooltipText: (isHandRaised) =>
    isHandRaised ? "等待主持人批准请求1" : "举手以演示1",

  //toolbar

  //videocall

  //invite title label - if only one user on the call
  inviteTileWelcomeText: "欢迎1",
  inviteTileNoElseJoinedYetText: "还没有其他人加入。1",
  inviteTileCopyInviteBtnText: "复制邀请1",
  //invite title label - if only one user on the call

  //invite popup
  invitePopupHeading: "邀请其他人加入此房间1",
  invitePopupPrimaryBtnText: "复制邀请1",
  //invite popup

  pstnUserLabel: "PSTN用户1",

  //video title network quality label
  //it will be displayed on hover
  videoTileNetworkQuailtyLabel: (quality: NetworkQualities) => {
    switch (quality) {
      case "unknown":
        return "不支持的网络1";
      case "excellent":
        return "优秀的网络1";
      case "good":
        return "良好的网络1";
      case "bad":
        return "差的网络1";
      case "veryBad":
        return "非常差的网络1";
      case "unpublished":
        return "未发布的网络1";
      case "loading":
        return "正在加载1";
      default:
        return "加载中1";
    }
  },
  //more button label on video tile and participant
  moreBtnViewWhiteboard: "查看白板1",
  moreBtnRemoveFromLarge: "从大画面中移除1",
  moreBtnViewInLarge: "在大画面中查看1",
  moreBtnPinToTop: "置顶1",
  moreBtnRemoveFromTop: "从顶部移除1",
  moreBtnMessagePrivately: "私信1",
  moreBtnAudio: (audio) => (audio ? "静音音频1" : "请求音频1"),
  moreBtnVideo: (video) => (video ? "静音视频1" : "请求视频1"),
  moreBtnAddAsPresenter: "添加为主持人1",
  moreBtnRemoveAsPresenter: "移除主持人1",
  moreBtnRemoveFromRoom: "从房间中移除1",
  moreBtnChangeName: "更改名称1",
  moreBtnStopScreenShare: "停止屏幕共享1",
  moreBtnRemoveScreenShare: "移除屏幕共享1",

  // native screen share popup
  // in mobile device camera need to be turn off in order to share the screen
  // this popup is used to alert the camera will be turn off
  nativeScreensharePopupHeading: "屏幕共享1",
  nativeScreensharePopupSubHeading: (camActive) =>
    camActive
      ? "注意：为了优化性能，摄像头和所有传入的视频将被关闭，您是否要继续？1"
      : "注意：为了优化性能，所有传入的视频将被关闭，您是否要继续？1",
  nativeScreensharePopupPrimaryBtnText: "继续1",
  nativeScreensharePopupIncludeDeviceAudioText: "包括设备音频1",

  //when user tries to turn on the camera While screensharing is going
  //we will alert the user to turn off the screen share to continue
  nativeStopScreensharePopupHeading: "停止屏幕共享？1",
  nativeStopScreensharePopupSubHeading: "您需要停止共享屏幕才能打开摄像头1",
  nativeStopScreensharePopupPrimaryBtnText: "停止共享并打开摄像头1",

  //stop recording popup - confirmation popup to stop recording
  stopRecordingPopupHeading: "停止录制？1",
  stopRecordingPopupSubHeading: "您确定要停止录制吗？您无法撤消此操作1",
  stopRecordingPopupPrimaryBtnText: "结束录制1",

  //clear all whiteboard popup - confirmation popup to clearall content drawn and uploaded in the whiteboard
  clearAllWhiteboardPopupHeading: "清除白板？1",
  clearAllWhiteboardPopupSubHeading: "您确定要清除白板吗？1",
  clearAllWhiteboardPopupPrimaryBtnText: "全部清除1",

  //leave room popup - confirmation popup before leaving the room
  leaveRoomPopupHeading: "离开房间？1",
  leaveRoomPopupSubHeading: (transcriptDownloadAvailable) =>
    transcriptDownloadAvailable
      ? `您确定要离开吗？您尚未下载您的文字记录1`
      : "您确定要离开此次会议吗？1",
  leaveRoomPopupPrimaryBtnText: "离开1",

  //remove user popup - confirmation popup to remove the user from the call
  removeUserFromRoomPopupHeading: (name) => `移除 ${name}？1`,
  removeUserFromRoomPopupSubHeading: (name) =>
    `移除后，${name} 仍然可以稍后重新加入房间1`,
  removeUserFromRoomPopupPrimaryBtnText: "移除1",

  //toast to inform user once that host removed you from the call
  userRemovedFromTheRoomToastHeading: (name) =>
    `系统将在5秒后将 ${name} 从此通话中移除1`,

  //remove screenshare popup - confirmation popup to remove the screenshare from the call
  removeScreenshareFromRoomPopupHeading: "移除屏幕共享？1",
  removeScreenshareFromRoomPopupSubHeading: (name) =>
    `移除后，${name} 仍然可以共享屏幕1`,
  removeScreenshareFromRoomPopupPrimaryBtnText: "移除1",

  //stt related labels

  //change spoken language poup
  sttChangeSpokenLanguagePopupHeading: (isFirstTimeOpened) =>
    isFirstTimeOpened ? "设置口头语言1" : "更改口头语言1",
  sttChangeSpokenLanguagePopupSubHeading: "此次会议中的所有人说的是哪种语言？1",
  sttChangeSpokenLanguagePopupPrimaryBtnText: "确认1",
  sttChangeSpokenLanguagePopupDropdownInfo: "您最多可以选择两种语言1",
  sttChangeSpokenLanguagePopupDropdownError: "请选择至少一种语言以继续1",
  sttChangeSpokenLanguageText: "更改口头语言1",

  //transcript related
  sttTranscriptPanelHeaderText: "会议记录1",
  sttDownloadBtnText: "下载1",
  sttDownloadTranscriptBtnText: "下载记录1",
  sttSettingSpokenLanguageText: "设置口头语言1",
  sttLanguageChangeInProgress: "正在更改语言...1",

  sttTranscriptPanelSearchText: "搜索1",
  sttTranscriptPanelNoSearchResultsFoundText: "未找到搜索结果1",
  sttTranscriptPanelViewLatestText: "查看最新1",

  sttSpokenLanguageToastHeading: (action) => `口头语言 ${action}1`,
  sttSpokenLanguageToastSubHeading: ({
    action,
    newLanguage,
    oldLanguage,
    username,
  }) =>
    action === "Set"
      ? `${username} 将口头语言设置为 "${newLanguage}"1`
      : `${username} 将口头语言从 "${oldLanguage}" 更改为 ${newLanguage}1`,

  //Side panel labels
  peoplePanelHeaderText: "人员1",

  //people panel host controls labels
  peoplePanelTurnoffAllCameraBtnText: "关闭所有摄像头1",
  peoplePanelMuteAllMicBtnText: "全部静音1",

  //people panel labels
  peoplePanelHostSectionHeaderText: "主持人1",
  peoplePanelAudienceSectionHeaderText: "听众1",
  peoplePanelInThisMeetingLabel: "在此次会议中1",
  peoplePanelNoHostJoinedContent: "尚无主持人加入。1",
  peoplePanelNoAudienceJoinedContent: "尚无听众加入。1",
  peoplePanelNoUsersJoinedContent: "尚无用户加入。1",
  peoplePanelWantToJoinText: "想要加入1",
  peoplePanelWaitingText: "等待中1",

  peoplePanelMeText: "我1",
  peoplePanelPresenterText: "主讲人1",

  peoplePanelWaitingRoomRequestApprovalBtnTxt: "准入1",
  peoplePanelWaitingRoomRequestDenyBtnTxt: "拒绝1",
  peoplePanelUserNotFoundLabel: "找不到用户1",
  peoplePanelStreamingRequestSectionHeader: "直播请求1",
  peoplePanelLivestreamingApprovalBtnText: "接受1",
  peoplePanelLivestreamingDenyBtnText: "拒绝1",

  waitingRoomApprovalRequiredToastHeading: "需要批准1",
  waitingRoomApprovalRequiredToastSubHeading: (username) =>
    `${username} 正在等待批准加入通话1`,
  waitingRoomApprovalRequiredPrimaryBtnText: "准许1",
  waitingRoomApprovalRequiredSecondaryBtnText: "拒绝1",

  //people panel waiting room approval rejection toast
  waitingRoomApprovalRejectionToastHeading: "需要批准1",
  waitingRoomApprovalRejectionToastSubHeading: "主持人拒绝了进入会议的权限1",

  //people panel confirmation popover
  muteAllConfirmationPopoverContent: (type: I18nMuteType) =>
    `静音通话中的所有${type}？1`,
  requestConfirmationPopoverContent: ({
    name,
    type,
  }: I18nRequestConfirmation) =>
    `请求${name}打开他们的${
      type === I18nMuteType.audio ? "麦克风1" : "摄像头1"
    }？`,
  muteConfirmationPopoverContent: ({ name, type }) =>
    `静音${name}在通话中的${type}？只有${name}可以解除静音。1`,

  //mute/request popover action button
  muteAllConfirmationPopoverPrimaryBtnText: "全部静音1",
  muteConfirmationPopoverPrimaryBtnText: "静音1",
  requestConfirmationPopoverPrimaryBtnText: "请求1",

  //chat
  //chat sub tab labels
  chatPanelGroupTabText: "群组1",
  chatPanelPrivateTabText: "私聊1",
  chatPanelUserOfflineText: "用户离线1",
  chatPanelUnreadMessageText: "未读消息1",

  //chat container placeholder content
  groupChatWelcomeContent: (noMessage) =>
    noMessage
      ? "欢迎来到聊天室！1\n所有消息在通话结束时都会被删除1"
      : "所有消息在通话结束时都会被删除1",

  //chat input box placeholder text
  groupChatInputPlaceHolderText: (name) => `公开聊天，${name}...1`,
  privateChatInputPlaceHolderText: (name) => `给${name}发送私聊消息1`,

  //chat toast notification

  //single user public chat
  publicChatToastHeading: (name: string) => `${name}在公开聊天中发表了评论1`,

  //multiple user public chat
  multiplePublicChatToastHeading: "公开聊天有新评论1",
  multiplePublicChatToastSubHeading: ({ count, from }) =>
    `您有来自${from}的${count}条新消息1`,

  //private chat
  privateChatToastHeading: "您收到一条私聊消息1",

  //single private chat message
  multiplePrivateChatToastHeading: ({ count }) => `您收到了${count}条私聊消息1`,

  //multiple private chat and public chat message
  multiplePublicAndPrivateChatToastHeading: "公开和私聊都有新评论1",
  multiplePublicAndPrivateChatToastSubHeading: ({
    publicChatCount,
    privateChatCount,
    from,
  }) =>
    `您有来自${from}的${publicChatCount}条公开消息和${privateChatCount}条私聊消息1`,

  //livestreaming attendee info tile
  //it will be shown to livestreaming attendee when the host is not joined.
  livestreamingAttendeeWhatYouCanDoText: "您可以在这里做什么：1",
  livestreamingAttendeeInviteOthersText: "邀请其他与会者1",
  livestreamingAttendeeWaitingForHostToJoinText: "等待主持人加入1",

  livestreamingAttendeeRaiseHandInfoHeading: "举手1",
  livestreamingAttendeeRaiseHandInfoSubHeading: "让大家知道您有话要说1",
  livestreamingAttendeeChatWithOthersInfoHeading: "与他人聊天1",
  livestreamingAttendeeChatWithOthersInfoSubHeading:
    "给其他与会者或主持人发送消息1",
  livestreamingAttendeePresentYourScreenInfoHeading: "共享您的屏幕1",
  livestreamingAttendeePresentYourScreenInfoSubHeading:
    "经主持人批准后，您可以成为演示者1",
  livestreamingAttendeeJoinWithActivitiesInfoHeading: "参与活动1",
  livestreamingAttendeeJoinWithActivitiesInfoSubHeading:
    "在白板上与所有人一起绘制1",

  //livestreaming notification and buttons labels

  livestreamRaiseHandRequestToastHeading: "您已经举手了1",
  livestreamRaiseHandRequestToastSubHeading: "等待主持人批准请求1",

  livestreamRaiseHandRequestReceivedToastHeading: (name) =>
    `${name}已经举手要成为演示者1`,
  livestreamRaiseHandRequestReceivedToastSubHeading:
    "一旦批准，他们将能够在通话期间发言、分享视频和演示1",

  livestreamRaiseHandRequestAcceptedToastHeading: "主持人已经批准了您的请求1",
  livestreamRaiseHandRequestAcceptedToastSubHeading: "您现在是演示者1",

  livestreamRaiseHandRequestRejectedToastHeading: "您的请求已被主持人拒绝1",

  livestreamRaiseHandRequestRecallToastHeading: (name) =>
    `${name}已经放下了手1`,

  livestreamRaiseHandRequestRecallLocalToastHeading: "您已经放下了手1",

  livestreamRaiseHandApprovedRequestRecallToastHeading:
    "主持人已撤销了直播权限1",

  livestreamPromoteAsCoHostToastHeading: "主持人提升您为演示者1",
  livestreamRequestAlreadyProcessed: "请求已处理1",

  //livestreaming toast action button
  livestreamToastApprovalBtnText: "允许成为演示者1",
  livestreamToastDenyBtnText: "拒绝1",

  videoRoomUserFallbackText: "用户1",

  videoRoomRecordingText: "录制中1",
  videoRoomGoToActiveSpeakerText: "切换到活跃的演讲者1",
  videoRoomScreenshareText: (username) => `${username}的屏幕共享1`,
  videoRoomStartingCallText: "正在开始通话，请稍等1",

  videoRoomScreenshareOverlayText: "您正在共享屏幕1",
  videoRoomScreenshareStopSharingBtnText: "停止共享1",
  videoRoomScreenShareErrorToastHeading: "启动屏幕共享失败1",
  videoRoomScreenShareErrorToastSubHeading: "权限被拒绝1",

  videoRoomRecordingToastHeading: (active) =>
    active ? "开始录制1" : "录制已停止1",
  videoRoomRecordingToastSubHeading: (name) => `此通话由${name}录制1`,

  //topbar people count onhover tooltip text
  videoRoomPeopleCountTooltipHostText: "主持人1",
  videoRoomPeopleCountTooltipAttendeeText: "观众1",

  //whiteboard label
  whiteboardInitializingText: "白板正在初始化1",

  //whiteboard widget labels
  whiteboardWidgetViewOnlyText: "仅查看1",
  whiteboardWidgetZoomInText: "放大1",
  whiteboardWidgetZoomOutText: "缩小1",
  whiteboardWidgetFitToScreenText: "适应屏幕1",
  whiteboardWidgetRedoText: "重做1",
  whiteboardWidgetUndoText: "撤销1",
  whiteboardWidgetExportToCloudText: "导出到云1",

  //whiteboard toolbox
  whiteboardToolboxSelectText: "选择1",
  whiteboardToolboxTextFormatting: "文本1",
  whiteboardToolboxMoveText: "移动1",
  whiteboardToolboxLaserText: "激光1",
  whiteboardToolboxEraseText: "橡皮擦1",
  whiteboardToolboxUploadText: "上传文档或图片1",
  whiteboardToolboxClearAllText: "清除所有1",
  whiteboardToolboxWidthLabel: "宽度1",
  whiteboardToolboxPxLabel: " 像素1",

  //whiteboard toast

  //whiteboard export toast
  whiteboardExportErrorToastHeading: "导出白板失败1",
  whiteboardExportInfoToastHeading: "请稍等几秒钟，以获取白板截图链接1",
  whiteboardExportSuccessToastHeading: "白板导出为图像。链接已复制到剪贴板1",

  //whiteboard file upload
  whiteboardFileUploadErrorToastHeading: (type) => `上传${type}时出错，请重试1`,
  whiteboardFileUploadInfoToastHeading: (type) =>
    `${type}上传将需要几秒钟才能显示在白板上1`,
  whiteboardFileUploadTypeErrorToastHeading: () => "不支持的文件1",
  whiteboardFileUploadTypeErrorToastSubHeading: () =>
    "请选择支持的文件格式，如pdf、doc、docx、ppt、pptx、png、jpg、jpeg1",

  deviceDetectionToastHeading: (name) => `检测到新的${name}1`,
  deviceDetectionToastSubHeading: ({ name, label }) =>
    `检测到新的${name}，名称为${label}。您要切换吗？1`,
  deviceDetectionPrimaryBtnText: "切换设备1",
  deviceDetectionSecondaryBtnText: "忽略1",
  deviceDetectionCheckboxText: "记住我的选择1",

  hostMutedUserToastHeading: (type) =>
    type === "audio" ? "主持人已将您的音频静音1" : "主持人已将您的视频静音1",
  hostRequestedUserToastHeading: (type) =>
    type === "audio" ? "主持人请求您发言1" : "主持人要求您开启视频1",
  hostRequestedUserToastPrimaryBtnText: () => "解除静音1",
  hostRequestedUserToastSecondaryBtnText: () => "稍后1",
  hostRemovedUserToastHeading: "主持人已将您从房间中移除1",

  //common labels
  cancelText: "取消",
  loadingText: "加载中...",
  //common labels

  //auth/login related labels

  //logout confirmation popup
  logoutText: "注销1",
  authLogoutPopupHeading: "确定要注销吗？1",
  authLogoutPopupSubHeading: "您确定要注销吗？1",
  authLogoutPopupPrimaryBtnText: "确认1",

  //native popup to require authentication if login enabled
  authLogInRequiredPopupHeading: "需要登录1",
  authLogInRequiredPopupSubHeading: "登录到您的组织以继续1",
  authLogInRequiredPopupPrimaryBtnText: "登录1",
  authLogInRequiredPopupSecondaryBtnText: "关闭应用1",

  //auth login error toast
  authSessionTimeoutToastHeading: "您的会话已超时，正在重试...1",
  authErrorOnLoginToastHeading: "登录时发生错误，请重新登录1",
  authAuthenticationFailedText: "身份验证失败1",
  authAuthorizingApplicationText: "正在授权应用...1",
};
