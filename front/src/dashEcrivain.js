import "./DashEcrivain.css";
import SideMenuEcrivain from "./Components/sideMenuEcrivain";
import AppHeaderEcrivain from "./Components/App HeaderEcrivain";
import { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2"; // Import Chart.js
import axios from "axios"; // Import axios for API calls
import { Chart, registerables } from 'chart.js'; // Import Chart.js and registerables
import img1 from "./assets/b3.jpg";
import img2 from "./assets/b1.jpg";
import img3 from "./assets/4.png";
import img4 from "./images/images/mature-man-working-from-home.jpg";
import "./App.css";

Chart.register(...registerables); // Register Chart.js components

function DashEcrivain() {
    const images = [img1, img2, img3, img4];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });
    const sliderInterval = useRef();
    const userId = JSON.parse(localStorage.getItem('user'))?._id;

    const switchImages = () => {
        setCurrentSlide((prevSlide) => (prevSlide < images.length - 1 ? prevSlide + 1 : 0));
    };

    useEffect(() => {
        sliderInterval.current = setInterval(switchImages, 5000);
        return () => {
            clearInterval(sliderInterval.current);
        };
    }, []);

    // Fetching commandes statistics from the API
    useEffect(() => {
      const fetchStatistics = async () => {
          try {
              let result = await fetch(`http://localhost:3000/commandes-par-utilisateurStat/${userId}`);
              if (!result.ok) {
                  throw new Error(`HTTP error! status: ${result.status}`);
              }
              result = await result.json();
              console.log('Response data:', result); // Check what data you receive

              const commandesCountByYear = result.commandesCountByYear;

              if (commandesCountByYear && commandesCountByYear.length > 0) {
                  const labels = commandesCountByYear.map(item => item._id);
                  const values = commandesCountByYear.map(item => item.count);
                  console.log(labels);
                  setChartData({
                      labels: labels,
                      datasets: [
                          {
                              label: "Commandes Count",
                              data: values,
                              backgroundColor: "rgba(75, 192, 192, 0.6)",
                              borderColor: "rgba(75, 192, 192, 1)",
                              borderWidth: 1,
                          },
                      ],
                  });
              } else {
                  setChartData({
                      labels: [],
                      datasets: [],
                  });
              }
          } catch (error) {
              console.error("Error fetching commandes:", error);
          }
      };

      fetchStatistics();
    }, [userId]);

    return (
        <div className="ommm">
            <div className="App1">
                <AppHeaderEcrivain />
                <div className="SideMenuAndPageContent">
                    <SideMenuEcrivain />
                    <div className="chart-container" style={{ width: '100%', height: '500px' , marginLeft:100 }}>
                      <br/>  <br/>  <br/>
                      <div><h1><b>Number of orders per year</b></h1></div>
                        {chartData.labels.length > 0 ? (
                            <Bar
                                data={chartData}
                                options={{
                                    responsive: true,
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                        },
                                    },
                                }}
                            />
                        ) : (
                            <p>No data available for the chart.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashEcrivain;
