import { VectorMap } from "react-jvectormap";
import { useRef } from "react";

const gdpData = {
  AF: 16.63,
  AL: 11.58,
  DZ: 158.97,
  AO: 85.81,
  AG: 1.1,
  AR: 351.02,
  AM: 8.83,
  AU: 1219.72,
  AT: 366.26,
  AZ: 52.17,
  BS: 7.54,
  BH: 21.73,
  BD: 105.4,
  BB: 3.96,
  BY: 52.89,
  BE: 461.33,
  BZ: 1.43,
  BJ: 6.49,
  BT: 1.4,
  BO: 19.18,
  BA: 16.2,
  BW: 12.5,
  BR: 2023.53,
  BN: 11.96,
  BG: 44.84,
  BF: 8.67,
  BI: 1.47,
  KH: 11.36,
  CZ: 195.23,
  DK: 304.56,
  DJ: 1.14,
  DM: 0.38,
  DO: 50.87,
  EC: 61.49,
  EG: 216.83,
  SV: 21.8,
  GQ: 14.55,
  ER: 2.25,
  EE: 19.22,
  ET: 30.94,
  FJ: 3.15,
  FI: 231.98,
  FR: 2555.44,
  GA: 12.56,
  GM: 1.04,
  GE: 11.23,
  DE: 3305.9,
  GH: 18.06,
  GR: 305.01,
  GD: 0.65,
  GT: 40.77,
  GN: 4.34,
  GW: 0.83,
  GY: 2.2,
  HT: 6.5,
  HN: 15.34,
  HK: 226.49,
  HU: 132.28,
  IS: 12.77,
  IN: 1430.02,
  ID: 695.06,
  IR: 337.9,
  IQ: 84.14,
  RS: 38.92,
  KN: 0.56,
  LC: 1,
  VC: 0.58,
  SD: 65.93,
};

export default function MarkersChart() {
  const mapRef = useRef();
  return (
    <div className="App" style={{ margin: 0, padding: 0, height: "100vh" }}>
      {/* Set map container to fill the entire screen */}
      <div style={{ width: "100%", height: "100%" }}>
        <VectorMap
          ref={mapRef}
          zoomOnScroll={false}
          zoomButtons={false}
          map={"world_mill"}
          backgroundColor="white"
          containerStyle={{
            width: "100%", // Ensure map takes full width of parent container
            height: "100%", // Ensure map takes full height of parent container
          }}
          markerStyle={{
            initial: {
              fill: "red",
              stroke: "#383f47",
            },
          }}
          containerClassName="map"
          series={{
            regions: [
              {
                scale: ["#DEEBF7", "#08519C"],
                attribute: "fill",
                values: gdpData,
                normalizeFunction: "polynomial",
                min: 1,
                max: 2050,
              },
            ],
          }}
          regionStyle={{
            initial: {
              fill: "#D1D5DB",
              "fill-opacity": 1,
              stroke: "#265cff",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            selected: {
              fill: "#FFFB00",
            },
          }}
          onRegionTipShow={function (event, label, code) {
            if (gdpData[code]) {
              label.html(
                `<div style="background-color: white; border: 1px solid #ccc; padding: 10px; border-radius: 6px; min-height: 70px; width: 150px; color: black;">
                  <p><b>${label.html()}</b></p>
                  <p>GDP: <b>${gdpData[code]}</b></p>
                </div>`
              );
            }
          }}
        />
      </div>
    </div>
  );
}
