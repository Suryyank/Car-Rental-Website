import React from "react";
import FormInput from "../atoms/FormInput";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnquiryFormSchema } from "../../../schema/FormSchema";
import {
  LuCalendarArrowDown,
  LuCalendarArrowUp,
  LuMapPin,
  LuUser,
} from "react-icons/lu";
import Button from "../atoms/Button";
import { useModalContext } from "../../../contexts/modal/ModalContext";
import { EnquiryFormValues } from "../../../schema/FormSchema";

const onSubmit: SubmitHandler<EnquiryFormValues> = (data) => {
  console.log(data);
};

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(EnquiryFormSchema),
  });
  const car = useModalContext();
  const carname = car.selectedCar?.name;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:w-[500px]">
      <div className="">
        <FormInput
          labelText={"Name*"}
          icons={<LuUser color="black" />}
          placeholder="Full Name"
          message={errors.name?.message}
          {...register("name")}
        />
      </div>
      <div className="">
        <FormInput
          labelText={"Location*"}
          icons={<LuMapPin color="black" />}
          placeholder="Location"
          message={errors.location?.message}
          {...register("location")}
        />
      </div>
      <div className="">
        <FormInput
          labelText={"Contact* (+91)"}
          icons={<LuMapPin color="black" />}
          placeholder="(+91)"
          message={errors.contact?.message}
          {...register("contact")}
        />
      </div>
      <div className="flex justify-between items-center gap-5 bg-black/0">
        <div className="bg-green-400/0 w-full">
          <FormInput
            labelText={"Pickup*"}
            icons={<LuCalendarArrowUp color="black" />}
            placeholder="PickUpDate"
            message={errors.pickupDate?.message}
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            {...register("pickupDate")}
          />
        </div>
        <div className="w-full">
          <FormInput
            labelText={"Drop*"}
            icons={<LuCalendarArrowDown color="black" />}
            type="date"
            message={errors.dropoffDate?.message}
            {...register("dropoffDate")}
          />
        </div>
      </div>
      <Button type="submit" title="Enquire" className="hover:bg-primary/80" />
    </form>
  );
};

export default EnquiryForm;
