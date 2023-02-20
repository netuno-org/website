import React, { useState } from "react";
import { WhatsAppOutlined } from '@ant-design/icons';
import './index.less'

export default () => {
  return (
    <div className="styles_container">
      <div className="contact-whatsapp-fix">
          <a title="WhatsApp" href='https://wa.me/+351912524751' target="_blank">
            <WhatsAppOutlined  style={{ fontSize: '32px', color: '#fff' }} />
          </a>
      </div>
    </div>
  );
};