import * as React from 'react';
import { BaseSlots, SlotProps } from '@fluentui/react-compose';
import { ComponentProps } from '@fluentui/react-utils';
import { ColorTokenSet } from '@fluentui/react-theme-provider/lib/compat/index';

/* eslint-disable @typescript-eslint/naming-convention */

export type CardSectionProps = ComponentProps &
  React.HTMLAttributes<HTMLDivElement> & {
    /** A card section can be fitted, without any space above or below it. */
    fitted?: boolean;
  };

export interface CardSectionState extends CardSectionProps {
  ref: React.RefObject<HTMLElement>;
}

export interface CardSectionSlots extends BaseSlots {}

export type CardSectionSlotProps = SlotProps<CardSectionSlots, CardSectionProps, React.HTMLAttributes<HTMLDivElement>>;

export type CardSectionTokens = ColorTokenSet & {};
