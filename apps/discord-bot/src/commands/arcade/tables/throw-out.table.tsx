import { Table } from '#components';
import { LocalizeFunction } from '@statsify/discord';
import { ThrowOut } from '@statsify/schemas';

interface ThrowOutTableProps {
  stats: ThrowOut;
  t: LocalizeFunction;
}

export const ThrowOutTable = ({ stats, t }: ThrowOutTableProps) => (
  <Table.table>
    <Table.tr>
      <Table.td title={t('stats.wins')} value={t(stats.wins)} color="§e" />
      <Table.td title={t('stats.kills')} value={t(stats.kills)} color="§a" />
      <Table.td title={t('stats.deaths')} value={t(stats.deaths)} color="§c" />
      <Table.td title={t('stats.kdr')} value={t(stats.kdr)} color="§6" />
    </Table.tr>
  </Table.table>
);