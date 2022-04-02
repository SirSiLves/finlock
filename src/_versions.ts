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
    versionDate: '2022-04-02T14:58:23.428Z',
    gitCommitHash: '80fb78a',
    versionLong: '0.0.0-80fb78a',
};
export default versions;
