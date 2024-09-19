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
  FormProps,
} from "antd";

import "@styles/index.scss";
import {
  FORM_ITEM_LAYOUT,
  TIMING_REQUEST_OPTIONS,
  FieldType,
  formatYearMonthDay,
  handleSubmitForm,
} from "@common/index";
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

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const formattedDate = formatYearMonthDay(values.date);

    try {
      const formData = {
        email: values.email,
        subject: values.subject_of_request,
        description: values.description_text,
        priority: values.timing_of_request,
        status: 2,
        custom_fields: {
          cf_phone: values.phone_number,
          cf_name: values.name_of_application,
          cf_floor: values.floor?.toString(),
          cf_residence: values.residence,
          cf_date: formattedDate,
        },
      };

      await handleSubmitForm(formData);
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <Form
      {...FORM_ITEM_LAYOUT}
      variant="outlined"
      className="form"
      onFinish={onFinish}
    >
      <div className="title">FICHE DE CONTACT</div>

      <div className="form__fields">
        <Row gutter={12}>
          <Col className="gutter-row" span={12}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: false, message: "Please input!" }]}
              className="form-row"
            >
              <DatePicker />
            </Form.Item>
          </Col>

          <Col className="gutter-row" span={12}>
            <Form.Item
              label="Residence"
              name="residence"
              rules={[{ required: false, message: "Please input!" }]}
              className="form-row"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Nom du demandeur"
          name="name_of_application"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Batiment"
          name="building"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Etage"
          name="floor"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <InputNumber style={{ width: "100%" }} />
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description_text"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Temporalite de la demande"
          name="timing_of_request"
          rules={[{ required: false, message: "Please input!" }]}
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
