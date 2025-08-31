// In TypeScript does not exist the concept of "static class variables", so we use an abstract class with static variables.
export abstract class Predefiniti_StampaServer {
  public static StampaServerEnabled: number = 0;
  public static UpdateInterval: number = 60; // In seconds
}

export abstract class Predefiniti_Archivio {
  public static ArchivioPath: string = 'DEFAULT_PATH';
  public static CatalogName: string = 'DefaultCatalog';

  public static MaxStorageDays: number = 365;
  public static MaxStorageDaysCheckInterval: number = 30;
}

export abstract class Predefiniti_Dicom {
  public static DCMColPrintProcessServerAdditionalOptions: string = '-default';
  public static DCMBNPrintProcessServerAdditionalOptions: string =
    '-bn-default';
}
