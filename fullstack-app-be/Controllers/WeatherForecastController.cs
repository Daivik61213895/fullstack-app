using System;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace fullstack_app_be.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public async Task<IActionResult> Get(string cityName)
    {
        try
        {
            WeatherForecast weatherForecast = new WeatherForecast();
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri($"http://api.weatherstack.com/current?access_key=f50a0875f9f1df4e99d365c8d424ddce&query={cityName}")
            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                try 
                {
                    var weather = JsonConvert.DeserializeObject<WeatherApiResponse>(body);
                    weatherForecast.TemperatureC = weather.Current.Temperature;
                    weatherForecast.WeatherType = weather.Current.Weather_Descriptions[0];
                    weatherForecast.Summary = weather.Current.Weather_Descriptions[0];
                    weatherForecast.Region = weather.Location.Name;
                    weatherForecast.CountryName = weather.Location.Country;
                }
                catch (JsonException ex)
                {
                    _logger.LogError(ex, "Error deserializing JSON response.");
                    return BadRequest("Please Provide valid City Name or Country name");
                }

            }
            return Ok(weatherForecast);
        }
        catch(Exception ex)
        {
            _logger.LogError(ex, "An error occurred while getting the weather forecast.");
            return BadRequest(ex.Message);
        }
    }
}
