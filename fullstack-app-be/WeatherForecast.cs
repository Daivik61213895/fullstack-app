namespace fullstack_app_be
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? WeatherType { get; set; }
        public string? Summary { get; set; }

        public string? Region { get; set; }
        public string? CountryName { get; set; }
    }

    public class Request
    {
        public string Type { get; set; }
        public string Query { get; set; }
        public string Language { get; set; }
        public string Unit { get; set; }
    }

    public class Location
    {
        public string Name { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string Lat { get; set; }
        public string Lon { get; set; }
        public string TimezoneId { get; set; }
        public string Localtime { get; set; }
        public int LocaltimeEpoch { get; set; }
        public string UtcOffset { get; set; }
    }

    public class Astro
    {
        public string Sunrise { get; set; }
        public string Sunset { get; set; }
        public string Moonrise { get; set; }
        public string Moonset { get; set; }
        public string MoonPhase { get; set; }
        public int MoonIllumination { get; set; }
    }

    public class AirQuality
    {
        public string Co { get; set; }
        public string No2 { get; set; }
        public string O3 { get; set; }
        public string So2 { get; set; }
        public string Pm25 { get; set; }
        public string Pm10 { get; set; }
        public string UsEpaIndex { get; set; }
        public string GbDefraIndex { get; set; }
    }

    public class Current
    {
        public string ObservationTime { get; set; }
        public int Temperature { get; set; }
        public int WeatherCode { get; set; }
        public List<string> Weather_Icons { get; set; }
        public List<string> Weather_Descriptions { get; set; }
        public Astro Astro { get; set; }
        public AirQuality AirQuality { get; set; }
        public int WindSpeed { get; set; }
        public int WindDegree { get; set; }
        public string WindDir { get; set; }
        public int Pressure { get; set; }
        public int Precip { get; set; }
        public int Humidity { get; set; }
        public int Cloudcover { get; set; }
        public int Feelslike { get; set; }
        public int UvIndex { get; set; }
        public int Visibility { get; set; }
        public string IsDay { get; set; }
    }
    public class WeatherApiResponse
    {
        public Request Request { get; set; }
        public Location Location { get; set; }
        public Current Current { get; set; }
    }
}
