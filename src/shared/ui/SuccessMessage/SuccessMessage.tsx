import { Modal } from 'antd';

interface SuccessMessageProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  okText?: string;
}

export const SuccessMessage = ({
  open,
  onClose,
  onConfirm,
  title = 'Success',
  message,
  okText = 'OK',
}: SuccessMessageProps) => (
  <Modal
    title={title}
    open={open}
    onOk={onConfirm}
    onCancel={onClose}
    okText={okText}
    cancelButtonProps={{ style: { display: 'none' } }}
    centered
  >
    {message && <p>{message}</p>}
  </Modal>
);

