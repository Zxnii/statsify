import { Table } from '#components';
import { LocalizeFunction } from '@statsify/discord';
import { Football } from '@statsify/schemas';

interface FootballTableProps {
  stats: Football;
  t: LocalizeFunction;
}

export const FootballTable = ({ stats, t }: FootballTableProps) => (
  <Table.table>
    <Table.tr>
      <Table.td title={t('stats.wins')} value={t(stats.wins)} color="§a" />
      <Table.td title={t('stats.goals')} value={t(stats.goals)} color="§b" />
    </Table.tr>
    <Table.tr>
      <Table.td title={t('stats.kicks')} value={t(stats.kicks)} color="§6" />
      <Table.td title={t('stats.powerKicks')} value={t(stats.powerKicks)} color="§c" />
    </Table.tr>
  </Table.table>
);