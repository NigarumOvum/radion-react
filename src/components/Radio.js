import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radio.png";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");
    
// get next 100 stations
const stations = await api.searchStations({
  tag:stationFilter,
 // countryCode: 'US',
  limit: 25,
  offset: 0, // 1 - is the second page
  orderBy: 'name'
  ,})

.then((data) => {
  return data;
});

return stations;
  };

  const filters = [
    "70's",
    "80's",
    "90's",
    "Acoustic",
    "Alternative",
    "Ambient",
    "Blues",
    "Classical",
    "Country",
    "Death metal",
    "Disco",
    "Electro",
    "Folk",
    "Funk",
    "Grunge",
    "Hip hop",
    "House",
    "Indie",
    "Jazz",
    "K-pop",
    "Latin",
    "Metal",
    "New age",
    "Pop",
    "Progressive Rock",
    "Psy",
    "Psychedelic",
    "Punk",
    "Rap",
    "Reggae",
    "Roots",
    "Rock",
    "Salsa",
    "Ska",
    "Sludge",
    "Spanish",
    "Rhythm",
    "Techno",
    "Trap",
    "World",
  ];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <div className="radio">
      <div className="filters">
        {filters.map((filter) => (
          <span
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations">
        {stations &&
          stations.map((station, index) => {
            return (
              <div className="station" key={index}>
                <div className="stationName">
                  <img
                    className="logo"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{station.name}</div>
                </div>

                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
