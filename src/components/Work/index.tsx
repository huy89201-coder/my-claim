import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
  Row,
} from "antd";

import "@styles/index.scss";
import { FORM_ITEM_LAYOUT, TIMING_REQUEST_OPTIONS } from "@common/index";
import { DefaultOptionType } from "antd/es/cascader";

export default function Work() {
  const [workTimingRequestOptions, setWorkTimingRequestOptions] =
    useState<DefaultOptionType[]>();

  useEffect(() => {
    const newTimingRequestOptions: DefaultOptionType[] = [
      ...TIMING_REQUEST_OPTIONS,
    ];

    newTimingRequestOptions.pop();

    setWorkTimingRequestOptions(newTimingRequestOptions);
  }, []);

  return (
    <Form {...FORM_ITEM_LAYOUT} variant="outlined" className="form">
      <div className="title">FICHE DE CONTACT</div>

      <div className="form__fields">
        <Row gutter={12}>
          <Col className="gutter-row" span={12}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please input!" }]}
              className="form-row"
            >
              <DatePicker />
            </Form.Item>
          </Col>

          <Col className="gutter-row" span={12}>
            <Form.Item
              label="Residence"
              name="residence"
              rules={[{ required: true, message: "Please input!" }]}
              className="form-row"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

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
          <Select options={workTimingRequestOptions} />
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
