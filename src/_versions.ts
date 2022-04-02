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
    versionDate: '2022-04-02T08:48:34.890Z',
    gitCommitHash: '02ac0bf',
    versionLong: '0.0.0-02ac0bf',
};
export default versions;
