import { ApiProperty } from '@nestjs/swagger';
import { Player } from '@statsify/schemas';
import { NotFoundException } from './base.404';

export class RankedSkyWarsNotFoundException extends NotFoundException {
  @ApiProperty()
  public uuid: string;

  @ApiProperty()
  public displayName: string;

  public constructor(player: Player) {
    super('rankedSkyWars');

    this.uuid = player.uuid;
    this.displayName = player.displayName;
  }
}