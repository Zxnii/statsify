import { Command } from '@statsify/discord';
import { CopsAndCrimsModes, COPS_AND_CRIMS_MODES } from '@statsify/schemas';
import { BaseHypixelCommand, BaseProfileProps, ProfileData } from '../base.hypixel-command';
import { CopsAndCrimsProfile } from './copsandcrims.profile';

@Command({ description: (t) => t('commands.copsandcrims') })
export class CopsAndCrimsCommand extends BaseHypixelCommand<CopsAndCrimsModes> {
  public constructor() {
    super(COPS_AND_CRIMS_MODES);
  }

  public getProfile(base: BaseProfileProps, { mode }: ProfileData<CopsAndCrimsModes>): JSX.Element {
    return <CopsAndCrimsProfile {...base} mode={mode} />;
  }
}