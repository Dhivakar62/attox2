import React from 'react';
import './machine.css';
import {
  DEVICE_BASE_IMAGE,
  TRAY_IMAGE,
  SAMPLE_PLATE_IMAGE,
  FRONT_FACE_IMAGE,
} from '../constants/assets';

export default function BactolizerMachine() {
  return (
    <>
      <div
        className="stage"
        role="img"
        aria-label="Animation of the planned Bactolizer device: the tray opens, a sample plate is placed in it, samples are added, the tray closes, the screen shows Analysis started, then Analysis completed, then Report generated recommending Antibiotic A."
      >
        <div className="dv">
          <span className="dv-shadow"></span>
          <img className="dv-base" src={DEVICE_BASE_IMAGE} alt="" />
          <span className="drsh"></span>
          <div className="dv-clip">
            <div className="drw">
              <img className="tray" src={TRAY_IMAGE} alt="" />
              <span className="plsh"></span>
              <img className="plt" src={SAMPLE_PLATE_IMAGE} alt="" />
              <span className="smp"></span>
            </div>
          </div>
          <div className="drw drw-f">
            <div className="frt">
              <img src={FRONT_FACE_IMAGE} alt="" />
              <span className="led"></span>
            </div>
          </div>
          <img className="pltd" src={SAMPLE_PLATE_IMAGE} alt="" />
          <div className="scr" aria-hidden="true">
            <div className="ui-top">
              <div>
                <b>Bactolizer</b>
                <span>Automated Susceptibility Testing</span>
              </div>
              <span className="ui-live">
                <i></i>
                <span className="lvw">
                  <span className="lv lv1">Ready</span>
                  <span className="lv lv2">Testing</span>
                  <span className="lv lv3">Complete</span>
                </span>
              </span>
            </div>
            <div className="ui-nav">
              <span className="on">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3z"></path>
                </svg>
                Home
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2h9l5 5v15H6zM8 11h8v2H8zm0 4h8v2H8z"></path>
                </svg>
                Samples
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2h9l5 5v15H6zM8 11h8v2H8zm0 4h8v2H8z"></path>
                </svg>
                Results
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm8.6 5.5l2-1.5-2-3.5-2.4.9a7 7 0 00-1.7-1L16 6h-4l-.5 2.4a7 7 0 00-1.7 1l-2.4-.9-2 3.5 2 1.5a7 7 0 000 2l-2 1.5 2 3.5 2.4-.9a7 7 0 001.7 1L12 22h4l.5-2.4a7 7 0 001.7-1l2.4.9 2-3.5-2-1.5a7 7 0 00-2z"></path>
                </svg>
                Settings
              </span>
            </div>
            <div className="ui-main">
              <div className="st st-ready">
                <div className="ui-card ui-hero">
                  <span className="ui-kick">Status</span>
                  <b className="ui-big">Ready</b>
                  <span className="ui-sm">Open the tray to load a sample</span>
                  <span className="ui-btn">Open tray</span>
                </div>
              </div>
              <div className="st st-open">
                <div className="ui-card ui-hero">
                  <span className="ui-kick">Tray</span>
                  <b className="ui-big">
                    Opening tray<em className="dots"><i>.</i><i>.</i><i>.</i></em>
                  </b>
                  <span className="ui-sm">Please wait</span>
                </div>
              </div>
              <div className="st st-load">
                <div className="ui-card ui-hero">
                  <span className="ui-kick">Tray open</span>
                  <b className="ui-big">Load sample</b>
                  <span className="ui-sm">Place the sample plate in the tray</span>
                  <svg
                    className="ui-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2EE6C5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v15M6 13l6 6 6-6"></path>
                  </svg>
                </div>
                <div className="ui-card ui-flow fl-load">
                  <span className="ui-h">Test flow</span>
                  <span className="fs fs1"><i></i>Sample loaded</span>
                  <span className="fs fs2"><i></i>Signal reading</span>
                  <span className="fs fs3"><i></i>Analysis</span>
                  <span className="fs fs4"><i></i>Report</span>
                </div>
              </div>
              <div className="st st-close">
                <div className="ui-card ui-hero">
                  <span className="ui-kick">Sample detected</span>
                  <b className="ui-big">
                    Closing tray<em className="dots"><i>.</i><i>.</i><i>.</i></em>
                  </b>
                  <span className="ui-sm">1 sample · 3 antibiotics</span>
                </div>
              </div>
              <div className="st st-run">
                <div className="ui-card ui-ring">
                  <div className="rw">
                    <svg viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="rgba(143,166,200,.22)"
                        strokeWidth="9"
                      ></circle>
                      <circle
                        className="rv-ring"
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#2EE6C5"
                        strokeWidth="9"
                        strokeLinecap="round"
                      ></circle>
                    </svg>
                    <span className="pct"></span>
                  </div>
                  <span className="ui-sm">Analysis in progress</span>
                </div>
                <div className="ui-card ui-info">
                  <span className="ui-kick">Analysis started</span>
                  <span className="kv"><em>Sample</em>Urine</span>
                  <span className="kv"><em>Panel</em>3 antibiotics</span>
                  <span className="kv"><em>Time</em>About 2 hours</span>
                </div>
                <div className="ui-card ui-flow fl-run">
                  <span className="ui-h">Test flow</span>
                  <span className="fs fs1"><i></i>Sample loaded</span>
                  <span className="fs fs2"><i></i>Signal reading</span>
                  <span className="fs fs3"><i></i>Analysis</span>
                  <span className="fs fs4"><i></i>Report</span>
                </div>
              </div>
              <div className="st st-done">
                <div className="ui-card ui-hero ui-center">
                  <span className="ui-tick">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7"></path>
                    </svg>
                  </span>
                  <b className="ui-big">Analysis completed</b>
                  <span className="ui-sm">Preparing report</span>
                </div>
              </div>
              <div className="st st-rep">
                <div className="ui-card ui-rep">
                  <div className="rep-h">
                    <b>Report generated</b>
                    <span>Result in about 2 hours</span>
                  </div>
                  <span className="rr rr1">
                    <em>Antibiotic A</em>
                    <span className="rb"><i style={{ width: '94%' }}></i></span>
                    <b className="ok">Works</b>
                  </span>
                  <span className="rr rr2">
                    <em>Antibiotic B</em>
                    <span className="rb"><i style={{ width: '22%' }}></i></span>
                    <b className="no">Resists</b>
                  </span>
                  <span className="rr rr3">
                    <em>Antibiotic C</em>
                    <span className="rb"><i style={{ width: '55%' }}></i></span>
                    <b className="mid">Partly</b>
                  </span>
                  <span className="rep-rec">Recommended: Antibiotic A</span>
                </div>
              </div>
            </div>
          </div>
          <span
            className="glare"
            style={{
              transform:
                'matrix3d(0.895255,0.00611016,0,-0.0000791784,-0.0662939,0.890193,0,-0.0000449049,0,0,1,0,186,204,0,1)',
            }}
          ></span>
          <span className="pwr"></span>
          <span className="press"></span>
        </div>
      </div>
      <p className="dcap">
        Concept animation of the planned commercial Bactolizer. Final design will differ.
      </p>
    </>
  );
}
