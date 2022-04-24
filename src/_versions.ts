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
    versionDate: '2022-04-24T17:57:08.528Z',
    gitCommitHash: 'ac278ae',
    versionLong: '0.0.0-ac278ae',
};
export default versions;
