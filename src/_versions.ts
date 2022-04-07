export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
};
export const versions: TsAppVersion = {
    version: '0.0.0',
    name: 'finlok',
    versionDate: '2022-04-07T11:44:00.273Z',
    gitCommitHash: 'ce7bce2',
    versionLong: '0.0.0-ce7bce2',
};
export default versions;
