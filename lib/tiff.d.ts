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
    private isLittleEndian();
    private hasTowel();
    private getFieldTagName(fieldTag);
    private getFieldTypeName(fieldType);
    private getFieldTypeLength(fieldTypeName);
    private getBits(numBits, byteOffset, bitOffset);
    private getBytes(numBytes, offset);
    private getFieldValues(fieldTagName, fieldTypeName, typeCount, valueOffset);
    private clampColorSampleTo8Bit(colorSample, bitsPerSample);
    private parseFileDirectory(byteOffset);
    parseTIFF(tiffArrayBuffer: ArrayBuffer): {
        data: Uint8Array | Uint16Array | Float32Array;
        width: number;
        height: number;
    };
}
