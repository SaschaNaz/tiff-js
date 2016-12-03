declare type TIFFFieldNames = 'Artist' | 'BitsPerSample' | 'CellLength' | 'CellWidth' | 'ColorMap' | 'Compression' | 'Copyright' | 'DateTime' | 'ExtraSamples' | 'FillOrder' | 'FreeByteCounts' | 'FreeOffsets' | 'GrayResponseCurve' | 'GrayResponseUnit' | 'HostComputer' | 'ImageDescription' | 'ImageLength' | 'ImageWidth' | 'Make' | 'MaxSampleValue' | 'MinSampleValue' | 'Model' | 'NewSubfileType' | 'Orientation' | 'PhotometricInterpretation' | 'PlanarConfiguration' | 'ResolutionUnit' | 'RowsPerStrip' | 'SamplesPerPixel' | 'Software' | 'StripByteCounts' | 'StripOffsets' | 'SubfileType' | 'Threshholding' | 'XResolution' | 'YResolution' | 'BadFaxLines' | 'CleanFaxData' | 'ClipPath' | 'ConsecutiveBadFaxLines' | 'Decode' | 'DefaultImageColor' | 'DocumentName' | 'DotRange' | 'HalftoneHints' | 'Indexed' | 'JPEGTables' | 'PageName' | 'PageNumber' | 'Predictor' | 'PrimaryChromaticities' | 'ReferenceBlackWhite' | 'SampleFormat' | 'StripRowCounts' | 'SubIFDs' | 'T4Options' | 'T6Options' | 'TileByteCounts' | 'TileLength' | 'TileOffsets' | 'TileWidth' | 'TransferFunction' | 'WhitePoint' | 'XClipPathUnits' | 'XPosition' | 'YCbCrCoefficients' | 'YCbCrPositioning' | 'YCbCrSubSampling' | 'YClipPathUnits' | 'YPosition' | 'ApertureValue' | 'ColorSpace' | 'DateTimeDigitized' | 'DateTimeOriginal' | 'Exif IFD' | 'ExifVersion' | 'ExposureTime' | 'FileSource' | 'Flash' | 'FlashpixVersion' | 'FNumber' | 'ImageUniqueID' | 'LightSource' | 'MakerNote' | 'ShutterSpeedValue' | 'UserComment' | 'IPTC' | 'ICC Profile' | 'XMP' | 'GDAL_METADATA' | 'GDAL_NODATA' | 'Photoshop';
declare type TIFFFieldDictionary = {
    [K in TIFFFieldNames]: {
        type: string;
        values: (string | number)[];
    };
};
declare class TIFFParser {
    tiffDataView: DataView;
    littleEndian: boolean;
    fileDirectories: TIFFFieldDictionary[];
    constructor();
    isLittleEndian(): boolean;
    hasTowel(): boolean;
    getFieldTagName(fieldTag: number): string;
    getFieldTypeName(fieldType: number): string;
    getFieldTypeLength(fieldTypeName: string): 2 | 8 | 1 | 4;
    getBits(numBits: number, byteOffset: number, bitOffset: number): {
        'bits': number;
        'byteOffset': number;
        'bitOffset': number;
    };
    getBytes(numBytes: number, offset: number): number;
    getFieldValues(fieldTagName: string, fieldTypeName: string, typeCount: number, valueOffset: number): (string | number)[];
    clampColorSampleTo8Bit(colorSample: number, bitsPerSample: number): number;
    parseFileDirectory(byteOffset: number): TIFFFieldDictionary[];
    parseTIFF(tiffArrayBuffer: ArrayBuffer, canvas: HTMLCanvasElement): {
        data: Uint8Array | Uint16Array | Float32Array;
        width: number;
        height: number;
    };
}
