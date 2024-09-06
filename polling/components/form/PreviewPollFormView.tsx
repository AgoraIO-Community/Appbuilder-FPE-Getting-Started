import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  BaseModalTitle,
  BaseModalContent,
  BaseModalActions,
  BaseModalCloseIcon,
} from '../../ui/BaseModal';
import {PollItem} from '../../context/poll-context';
import {POLL_DURATION} from './form-config';
import BaseRadioButton from '../../ui/BaseRadioButton';
import {TertiaryButton, Checkbox, ThemeConfig} from 'customization-api';

interface Props {
  form: PollItem;
  onEdit: () => void;
  onSave: (launch: boolean) => void;
  onClose: () => void;
}

export default function PreviewPollFormView({
  form,
  onEdit,
  onSave,
  onClose,
}: Props) {
  return (
    <>
      <BaseModalTitle title="Poll Preview">
        <BaseModalCloseIcon onClose={onClose} />
      </BaseModalTitle>
      <BaseModalContent>
        <View style={style.previewContainer}>
          {form.duration && (
            <Text style={style.previewTimer}>{POLL_DURATION}</Text>
          )}
          <Text style={style.previewQuestion}>{form.question}</Text>
          {form?.options ? (
            <View style={style.previewOptionSection}>
              {form.multiple_response
                ? form.options.map((option, index) => (
                    <View style={style.previewOptionCard} key={index}>
                      <Checkbox
                        key={index}
                        checked={false}
                        disabled={true}
                        label={option.text}
                        labelStye={style.previewOptionText}
                        onChange={() => {}}
                      />
                    </View>
                  ))
                : form.options.map((option, index) => (
                    <View style={style.previewOptionCard} key={index}>
                      <BaseRadioButton
                        disabled
                        option={{
                          label: option.text,
                          value: option.value,
                        }}
                        labelStyle={style.previewOptionText}
                        checked={false}
                        onChange={() => {}}
                      />
                    </View>
                  ))}
            </View>
          ) : (
            <></>
          )}
        </View>
      </BaseModalContent>
      <BaseModalActions>
        <View style={style.previewActions}>
          <View style={style.btnContainer}>
            <TertiaryButton
              onPress={() => {
                onEdit();
              }}
              text="Edit"
            />
          </View>
          <View style={style.btnContainer}>
            <TertiaryButton
              text="Save for later"
              onPress={() => {
                onSave(false);
              }}
            />
          </View>
          <View style={style.btnContainer}>
            <TertiaryButton
              text="Launch Now"
              onPress={() => {
                onSave(true);
              }}
            />
          </View>
        </View>
      </BaseModalActions>
    </>
  );
}

export const style = StyleSheet.create({
  previewContainer: {
    width: 550,
  },
  previewTimer: {
    color: $config.SEMANTIC_WARNING,
    fontFamily: ThemeConfig.FontFamily.sansPro,
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 12,
  },
  previewQuestion: {
    color: $config.FONT_COLOR + ThemeConfig.EmphasisPlus.high,
    fontSize: ThemeConfig.FontSize.medium,
    fontFamily: ThemeConfig.FontFamily.sansPro,
    lineHeight: 24,
    fontWeight: '600',
    paddingBottom: 20,
  },
  previewOptionSection: {
    backgroundColor: $config.INPUT_FIELD_BACKGROUND_COLOR,
    borderRadius: 9,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  previewOptionCard: {
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  previewOptionText: {
    color: $config.FONT_COLOR,
    fontSize: ThemeConfig.FontSize.normal,
    fontFamily: ThemeConfig.FontFamily.sansPro,
    fontWeight: '400',
    lineHeight: 24,
  },
  previewActions: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  btnContainer: {
    flex: 1,
  },
});
