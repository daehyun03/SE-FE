import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Switch,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { usePostCommentMutation } from "@/react-query/hooks";
import { openColors } from "@/styles";

interface CommentInputProps {}

export const CommentInput = () => {
  const { postId } = useParams();
  const [value, setValue] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSecret, setIsSecret] = useState(false);

  const postCommentMutation = usePostCommentMutation();

  const handleSubmit = () => {
    postCommentMutation.mutate({
      postId: Number(postId),
      contents: value,
      isAnonymous,
    });

    setIsAnonymous(false);
    setValue("");
    setIsSecret(false);
  };

  return (
    <Box
      display="inline-block"
      w={{ base: "100%", md: "784px" }}
      maxW={{ base: "600px", md: "100%" }}
      pb="8px"
    >
      <Box
        display="flex"
        justifyContent="center"
        w={{ md: "784px" }}
        bgColor={openColors.white}
      >
        <Textarea
          placeholder="댓글을 입력해주세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          minH="100px"
          h={{ md: "120px" }}
          maxW={{ base: "600px", md: "100%" }}
          borderRadius={{ base: "0", md: "8px" }}
          border={`1px solid ${openColors.gray[5]}`}
          focusBorderColor={openColors.blue[5]}
          my="10px"
          mx={{ base: "12px", md: "0" }}
        />
      </Box>
      <Box
        display="flex"
        w="fit-content"
        h="fit-content"
        mx={{ base: "12px", md: "0" }}
        ml={{ md: "20px" }}
        bgColor={openColors.white}
        alignItems="center"
        justifyContent="right"
        float="right"
      >
        <Button
          variant="primary"
          size={{ base: "sm", md: "md" }}
          onClick={handleSubmit}
        >
          등록
        </Button>
      </Box>
      <Box
        display="flex"
        w="fit-content"
        h="fit-content"
        minH={{ base: "30px", md: "40px" }}
        bgColor={openColors.white}
        alignItems="center"
        float="right"
      >
        <FormControl
          display="flex"
          alignItems="center"
          h="100%"
          flexWrap="wrap"
          justifyContent="right"
        >
          <Box
            display="flex"
            alignItems="center"
            mr={{ base: "12px", sm: "16px" }}
          >
            <FormLabel htmlFor="anonymous" mb="0" mr="4px" minW="36px">
              익명
            </FormLabel>
            <Switch
              id="anonymous"
              mt="3px"
              onChange={() => {
                setIsAnonymous(!isAnonymous);
              }}
            />
          </Box>
          <Tooltip
            hasArrow
            label="비밀댓글은 나와 게시글 작성자만 볼 수 있어요!"
            bg={openColors.gray[7]}
            closeDelay={1000}
          >
            <Box display="flex" alignItems="center">
              <FormLabel htmlFor="secret" mb="0" mr="4px" minW="64px">
                비밀댓글
              </FormLabel>
              <Switch
                id="secret"
                mt="3px"
                onChange={() => {
                  setIsSecret(!isSecret);
                }}
              />
            </Box>
          </Tooltip>
        </FormControl>
      </Box>
    </Box>
  );
};
