const modal = document.getElementById("infoModal");
      const modalTitle = document.getElementById("modal-title");
      const modalDetails = document.getElementById("modal-details");
      const closeModal = document.getElementById("closeModal");

      document.querySelectorAll(".container > div").forEach((card) => {
        card.addEventListener("click", () => {
          const metricType = card.dataset.type;

          const details = {
            goals: "You have completed 16 out of 24 goals set for this week. Keep pushing forward!",
            respiration: "Your respiration is steady. Make sure to maintain healthy breathing patterns.",
            miles: "Track your running progress and aim for 5 more miles this week.",
            temperature: "Your body temperature is normal. Stay hydrated.",
            sleep: "You are on track with your sleep schedule. Aim for 8 hours nightly.",
            "heart-rate": "Your heart rate is stable at 75 bpm. Ensure to keep exercising.",
            weight: "Your current weight is 170 lbs. Monitor weekly for changes.",
            "fat-percentage": "Your body fat percentage is 24%. This is within a healthy range.",
            glucose: "Your blood glucose is 90 mg/dl. This is a normal level.",
            calories: "Your average daily consumption is 2080 kcal. Try to balance intake and activity.",
            workouts: "Keep up with your workouts to maintain strength and endurance.",
            hydration: "Your body hydration is at 61%. Aim for 8 glasses of water daily."
          };

          modalTitle.textContent = metricType.replace(/-/g, " ").toUpperCase();
          modalDetails.textContent = details[metricType] || "No details available.";
          modal.style.display = "flex";
        });
      });

      closeModal.addEventListener("click", () => {
        modal.style.display = "none";
      });

      // Example of updating data dynamically
      const updateData = () => {
        const randomHeartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
        const heartRateCard = document.querySelector("[data-type='heart-rate'] h2");
        heartRateCard.innerHTML = `${randomHeartRate} <span>bpm</span>`;
      };

      // Update heart rate every 5 seconds
      setInterval(updateData, 5000);
