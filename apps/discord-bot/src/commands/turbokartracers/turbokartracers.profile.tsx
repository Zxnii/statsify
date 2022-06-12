import { Container, Footer, Header, SidebarItem, Table } from '#components';
import { FormattedGame } from '@statsify/schemas';
import { BaseProfileProps } from '../base.hypixel-command';

export const TurboKartRacersProfile = ({
  skin,
  player,
  background,
  logo,
  premium,
  badge,
  t,
  time,
}: BaseProfileProps) => {
  const { turbokartracers } = player.stats;

  const sidebar: SidebarItem[] = [
    [t('stats.coins'), t(turbokartracers.coins), '§6'],
    [t('stats.coinsPickedUp'), t(turbokartracers.coinsPickedUp), '§e'],
    [t('stats.boxesPickedUp'), t(turbokartracers.boxesPickedUp), '§c'],
    [t('stats.grandPrixTokens'), t(turbokartracers.grandPrixTokens), '§b'],
    [t('stats.lapsCompleted'), t(turbokartracers.lapsCompleted), '§2'],
  ];

  return (
    <Container background={background}>
      <Header
        skin={skin}
        name={player.prefixName}
        badge={badge}
        sidebar={sidebar}
        title={`§l${FormattedGame.TURBO_KART_RACERS} §fStats`}
        time={time}
      />
      <Table.table>
        <Table.tr>
          <Table.td title={t('stats.goldRate')} value={`${turbokartracers.goldRate}%`} color="§6" />
          <Table.td
            title={t('stats.trophyRate')}
            value={`${turbokartracers.trophyRate}%`}
            color="§b"
          />
          <Table.td
            title={t('stats.gamesPlayed')}
            value={t(turbokartracers.gamesPlayed)}
            color="§a"
          />
        </Table.tr>
        <Table.tr>
          <Table.td
            title={t('stats.goldTrophies')}
            value={t(turbokartracers.gold)}
            color="§#ffd700"
          />
          <Table.td
            title={t('stats.silverTrophies')}
            value={t(turbokartracers.silver)}
            color="§#c0c0c0"
          />
          <Table.td
            title={t('stats.bronzeTrophies')}
            value={t(turbokartracers.bronze)}
            color="§#cd7f32"
          />
          <Table.td title={t('stats.totalTrophies')} value={t(turbokartracers.total)} color="§a" />
        </Table.tr>
      </Table.table>
      <Footer logo={logo} premium={premium} />
    </Container>
  );
};