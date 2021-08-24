import React, { useContext } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { playerContext } from "../ComponentsUI/comtext/playerContext";
import {EditFilled, DeleteFilled} from '@ant-design/icons';

export default function ModalLivros({active, cancel, detalhesDoLivro}) {
    const {excluir} = useContext(playerContext);
    const history = useHistory();

  return (
    <Modal visible={active} onCancel={cancel} okText='OK'>
      <div>
        <p>{detalhesDoLivro.id}</p>
    </div>
    </Modal>
  );
}