import React, { useEffect, useState } from "react";
import "@styles/index.scss";
import {
  FORM_ITEM_LAYOUT,
  TIMING_REQUEST_OPTIONS,
  YES_NO_OPTIONS,
} from "@common/index";
import { Form, DatePicker, Input, InputNumber, Select, Button } from "antd";
import { DefaultOptionType } from "antd/es/cascader";

export default function Hotel() {
  const [restaurantTimingRequestOptions, setRestaurantTimingRequestOptions] =
    useState<DefaultOptionType[]>();

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
      // onValuesChange={onFormVariantChange}
      variant="outlined"
      className="form"
    >
      <div className="title">FICHE DE CONTACT</div>

      <div className="form__fields">
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Nom du client"
          name="name_of_client"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Adresse de l'hotel"
          name="address_hotel"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date du probleme"
          name="date_problem"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Coordonnees telephonique"
          name="phone_number"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Objet de la demande"
          name="subject_of_request"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Temporalite de la demande"
          name="timing_of_request"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Select options={restaurantTimingRequestOptions} />
        </Form.Item>

        <Form.Item
          label="Le client souhaitre etre recontacte"
          name="customer_contact"
          rules={[{ required: true, message: "Please input!" }]}
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
