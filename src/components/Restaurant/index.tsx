import React, { useEffect, useState } from "react";
import "@styles/index.scss";
import {
  FieldType,
  FORM_ITEM_LAYOUT,
  formatYearMonthDay,
  handleSubmitForm,
  TIMING_REQUEST_OPTIONS,
  YES_NO_OPTIONS,
} from "@common/index";
import { Form, DatePicker, Input, Select, Button, FormProps } from "antd";
import { DefaultOptionType } from "antd/es/cascader";

export default function Restaurant() {
  const [restaurantTimingRequestOptions, setRestaurantTimingRequestOptions] =
    useState<DefaultOptionType[]>();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const date = formatYearMonthDay(values.date);
    const problemDate = formatYearMonthDay(values.date_problem);

    try {
      const formData = {
        email: values.email,
        subject: values.subject_of_request,
        priority: values.timing_of_request,
        status: 2,
        custom_fields: {
          cf_phone: values.phone_number,
          cf_name: values.name_of_client,
          cf_floor: values.floor?.toString(),
          cf_residence: values.address_restaurant,
          cf_date: date,
          cf_problem_date: problemDate,
          cf_client_want_to_contact: values.client_want_to_contact,
        },
      };

      await handleSubmitForm(formData);
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  useEffect(() => {
    const newRestaurantRequestOptions: DefaultOptionType[] = [
      ...TIMING_REQUEST_OPTIONS,
    ];

    newRestaurantRequestOptions.pop();

    setRestaurantTimingRequestOptions(newRestaurantRequestOptions);
  }, []);

  return (
    <Form
      {...FORM_ITEM_LAYOUT}
      onFinish={onFinish}
      variant="outlined"
      className="form"
    >
      <div className="title">FICHE DE CONTACT</div>

      <div className="form__fields">
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Nom du client"
          name="name_of_client"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Adresse restaurant"
          name="address_restaurant"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date du probleme"
          name="date_problem"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Coordonnees telephonique"
          name="phone_number"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Objet de la demande"
          name="subject_of_request"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Temporalite de la demande"
          name="timing_of_request"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Select options={restaurantTimingRequestOptions} />
        </Form.Item>

        <Form.Item
          label="Le client souhaitre etre recontacte"
          name="client_want_to_contact"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Select options={YES_NO_OPTIONS} />
        </Form.Item>
      </div>

      <div className="form__actions">
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn"
            // disabled={true}
          >
            Confirm
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
