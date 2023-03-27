import React from "react";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <>
      <Navigation />

      <h2 className="title">Home</h2>
      <main class="wrapper">
        <img class="cover" src="./images/1.jpg" alt="not found" />
        <h2>Try Our Popular Gadgets</h2>
        <div class="row">
          <div class="col">
            <div class="card">
              <img src="./images/gopro.jpg" alt="Avatar" class="card-img" />
              <div class="container">
                <ul class="card-item">
                  <li>Online only</li>
                  <li>Go Pro</li>
                  <li>Check for more details</li>
                  <li>16MP sensor</li>
                  <li>
                    {" "}
                    <div class="dropdown">
                      <span>Select an option</span>
                      <div class="dropdown-content">
                        <p>Pickup</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button class="card-btn">Add</button>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./images/headphone.jpg" alt="Avatar" class="card-img" />
              <div class="container">
                <ul class="card-item">
                  <li>Online Only</li>
                  <li>Headphone by harman kardon</li>
                  <li>Wirelsess connection</li>
                  <li>20 hours battery backup</li>
                  <li>
                    {" "}
                    <div class="dropdown">
                      <span>Select an option</span>
                      <div class="dropdown-content">
                        <p>Pick-Up</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="card-btn">Add</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./images/watch.jpg" alt="Avatar" class="card-img" />
              <div class="container">
                <ul class="card-item">
                  <li>Smart Watch</li>
                  <li>includes 2 straps</li>
                  <li>8 hour battery backup</li>
                  <li>Wireless charger</li>
                  <li>
                    {" "}
                    <div class="dropdown">
                      <span>Select an option</span>
                      <div class="dropdown-content">
                        <p>Pick-up</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="card-btn">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <img src="./images/i12.jpg" alt="Avatar" class="card-img" />
              <div class="container">
                <ul class="card-item">
                  <li>Online only</li>
                  <li>64 GB storage</li>
                  <li>includes 3 months apple care</li>
                  <li>EMI available</li>
                  <li>
                    {" "}
                    <div class="dropdown">
                      <span>Select an option</span>
                      <div class="dropdown-content">
                        <p>Pick-Up</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button class="card-btn">Add</button>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./images/ipad.jpg" alt="Avatar" class="card-img" />
              <div class="container">
                <ul class="card-item">
                  <li>Online Only</li>
                  <li>Ipad OS 13</li>
                  <li>128 GB storage</li>
                  <li>With 15 Watt charger</li>

                  <li>
                    {" "}
                    <div class="dropdown">
                      <span>Select an option</span>
                      <div class="dropdown-content">
                        <p>Pick-Up</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="card-btn">Add</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./images/iwatch.jpg" alt="Avatar" class="card-img" />
              <div class="container">
                <ul class="card-item">
                  <li>Online Only</li>
                  <li>Series 7</li>
                  <li>45mm</li>
                  <li>12 hours battery backup</li>
                  <li>
                    {" "}
                    <div class="dropdown">
                      <span>Select an option</span>
                      <div class="dropdown-content">
                        <p>Pick-Up</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <button class="card-btn">Add</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
