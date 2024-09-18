import React from "react";
import "@styles/index.scss";
import { Form, DatePicker, Input, InputNumber, Select, Button } from "antd";
import { FORM_ITEM_LAYOUT, TIMING_REQUEST_OPTIONS } from "@common/index";

export default function Trustee() {
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
          label="Nom du demandeur"
          name="name_of_application"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Batiment"
          name="building"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Etage"
          name="floor"
          rules={[{ required: true, message: "Please input!" }]}
          className="form-row"
        >
          <InputNumber style={{ width: "100%" }} />
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
          <Select options={TIMING_REQUEST_OPTIONS} />
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
