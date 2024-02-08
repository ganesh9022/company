import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdFileDownloadDone } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { Flex, Text, Card, Box, Avatar } from "@radix-ui/themes"

function LeavesBalanceCard() {
  return (
    <div>
      <Card style={{ maxWidth: 340, padding: '20px' }}>
        <Box>
          <Text as="div" size="5" weight="bold">
           Leaves Balance
          </Text>
        </Box>
        <Flex gap="3" align="center">
          <Box style={{ borderRadius: '50%', padding: '8px',padding: '10px', backgroundColor: '#e0e0e0' }}>
            <MdFileDownloadDone />
          </Box>
          <Box style={{ margin: '9px 0',padding: '0px' }}>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
        <Box style={{ margin: '10px 0',padding: 'px' }}> {/* Add a margin for spacing */}
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              radius="full"
            >
              <MdFileDownloadDone />
            </Avatar>
            <Box >
              <Text as="div" size="2" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </div>
  );
}

export default LeavesBalanceCard;
