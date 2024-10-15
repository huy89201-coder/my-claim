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
  Image,
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
import type { GetProp, UploadFile, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const uploadButton = (
  <button style={{ border: 0, background: "none" }} type="button">
    click me
    <div style={{ marginTop: 8 }}>Upload</div>
  </button>
);

export default function Work() {
  const [fileList, setFileList] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [workTimingRequestOptions, setWorkTimingRequestOptions] =
    useState<DefaultOptionType[]>();

  useEffect(() => {
    const newTimingRequestOptions: DefaultOptionType[] = [
      ...TIMING_REQUEST_OPTIONS,
    ];

    newTimingRequestOptions.pop();

    setWorkTimingRequestOptions(newTimingRequestOptions);
  }, []);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files && event.target.files;

    if (files) {
      setFileList(Array.from(files));

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const formattedDate = formatYearMonthDay(values.date);
    const formData = new FormData();

    try {
      formData.append("email", values.email as string);
      formData.append("subject", values.subject_of_request as string);
      formData.append("description", values.description_text as string);
      formData.append("priority", values.timing_of_request as string);
      formData.append("status", "2");
      // formData.append("attachments[]", convertToFile(fileList[0]) as any);
      formData.append("attachments[]", fileList[0] as any);

      // Append custom fields
      formData.append("custom_fields[cf_phone]", values.phone_number as string);
      formData.append(
        "custom_fields[cf_name]",
        values.name_of_application as string
      );
      formData.append("custom_fields[cf_floor]", values.floor as string);
      formData.append(
        "custom_fields[cf_residence]",
        values.residence as string
      );
      formData.append("custom_fields[cf_date]", formattedDate as string);

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

        <Form.Item
          label="Attachment"
          name="attachment"
          rules={[{ required: false, message: "Please input!" }]}
          className="form-row"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="upload-btn"
          />

          <label
            htmlFor="upload-btn"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span>Upload</span>
            )}
          </label>
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

      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </Form>
  );
}
