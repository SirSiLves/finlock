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
    versionDate: '2022-04-23T07:41:17.892Z',
    gitCommitHash: '0aaa69a',
    versionLong: '0.0.0-0aaa69a',
};
export default versions;
