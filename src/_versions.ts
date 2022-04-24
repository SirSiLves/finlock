export interface TsAppVersion {
    version: string;
    name: string;
    description?: string;
    versionLong?: string;
    versionDate: string;
    gitCommitHash?: string;
    gitCommitDate?: string;
    gitTag?: string;
}
export const versions: TsAppVersion = {
    version: '0.0.0',
    name: 'finlok',
    versionDate: '2022-04-24T06:17:50.819Z',
    gitCommitHash: '519ba29',
    versionLong: '0.0.0-519ba29',
}
export default versions;
