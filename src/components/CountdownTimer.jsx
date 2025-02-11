import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateDaysLeft = () => {
    const today = new Date();
    const timeDiff = new Date(targetDate) - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convertir ms a días
  };

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000 * 60 * 60); // Se actualiza cada hora

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="p-4 rounded-lg text-center">
      <h1 className="text-2xl poppins text-amber-700">🎉 Faltan <span className="text-blue-500">{daysLeft}</span> días 🎊</h1>
    </div>
  );
};

export default CountdownTimer;
