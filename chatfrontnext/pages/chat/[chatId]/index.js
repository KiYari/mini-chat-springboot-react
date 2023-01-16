import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import InheritBox from '../../../components/box/InheritBox';
import Layout from '../../../layout/Layout';
import ChatComponent from "../../../components/chat/ChatComponent";

export default function Chat() {
    const router = useRouter()
    const id = router.query.chatId

    return(
      <Layout>
          <InheritBox>
              <ChatComponent/>
          </InheritBox>
      </Layout>
    )
}