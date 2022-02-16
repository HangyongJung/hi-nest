import { IsNumber, IsOptional, IsString, IS_NUMBER } from "class-validator";

export class CreateMovieDto {

    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
} 