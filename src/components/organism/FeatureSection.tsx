import React from "react";
import InfoCard from "../atoms/InfoCard";
import { motion } from "motion/react";
import { TbCreditCardOff, TbCashBanknoteOff, TbBolt } from "react-icons/tb";

const infoCardInfo = [{}];

const FeatureSection = () => {
  return (
    <div className="sm:flex grid grid-cols-1 items-center justify-between gap-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <InfoCard
          icon={<TbCreditCardOff size={35} />}
          titleText="No Credit Card Needed"
          paraText="No credit card required. Top up your wallet for hasslefree and secure transactions"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <InfoCard
          icon={<TbBolt size={35} />}
          titleText="Super fast Check-in"
          paraText="No credit card required. just recharges your account balance to security amount and rent hasslefree"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <InfoCard
          icon={<TbCashBanknoteOff size={35} />}
          titleText="No hidden fees"
          paraText="No credit card required. just recharges your account balance to security amount and rent hasslefree"
        />
      </motion.div>
    </div>
  );
};

export default FeatureSection;
