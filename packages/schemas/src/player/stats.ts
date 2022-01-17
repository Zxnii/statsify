import type { APIData } from '@statsify/util';
import { Field } from '../decorators';
import { Arcade } from './gamemodes/arcade';
import { ArenaBrawl } from './gamemodes/arenabrawl';
import { BedWars } from './gamemodes/bedwars';
import { BlitzSG } from './gamemodes/blitzsg';
import { General } from './gamemodes/general';
import { Paintball } from './gamemodes/paintball';
import { Quake } from './gamemodes/quake';
import { SkyWars } from './gamemodes/skywars';

export class PlayerStats {
  @Field()
  public arcade: Arcade;

  @Field()
  public arenabrawl: ArenaBrawl;

  @Field()
  public bedwars: BedWars;

  @Field()
  public blitzsg: BlitzSG;

  @Field()
  public general: General;

  @Field()
  public paintball: Paintball;

  @Field()
  public quake: Quake;

  @Field()
  public skywars: SkyWars;
  public constructor(data: APIData = {}) {
    this.arcade = new Arcade(data?.stats?.Arcade ?? {}, data?.achievements ?? {});
    this.arenabrawl = new ArenaBrawl(data?.stats?.Arena ?? {});
    this.bedwars = new BedWars(data?.stats?.Bedwars ?? {});
    this.blitzsg = new BlitzSG(data?.stats?.HungerGames ?? {});
    this.general = new General(data);
    this.paintball = new Paintball(data?.stats?.Paintball ?? {});
    this.quake = new Quake(data?.stats?.Quake ?? {}, data?.achievements ?? {});
    this.skywars = new SkyWars(data?.stats?.SkyWars ?? {});
  }
}