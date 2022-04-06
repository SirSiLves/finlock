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
    name: 'finlock',
    versionDate: '2022-04-06T07:38:59.438Z',
    gitCommitHash: 'a152250',
    versionLong: '0.0.0-a152250',
};
export default versions;
