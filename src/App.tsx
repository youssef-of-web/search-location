import { Col, Flex, Row, Select, Space, Spin, Tag, Typography } from "antd";
import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FETCH_LOCATIONS_OPTIONS } from "./helpers/api";
import { reformatData } from "./helpers/utils";

const { Title } = Typography;

function App() {
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [coords, setCoords] = useState({
    start: [],
    end: [],
  });

  // Fetch data for start location
  const { data: startLocations, isLoading: startLoading } =
    FETCH_LOCATIONS_OPTIONS("locations_start", start!);

  // Fetch data for end location
  const { data: endLocations, isLoading: endLoading } = FETCH_LOCATIONS_OPTIONS(
    "locations_end",
    end!
  );

  return (
    <>
      <Title level={2}>Search Location</Title>
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
        style={{ marginTop: "50px" }}
      >
        <Col span={24}>
          <Flex vertical gap={"middle"}>
            <Select
              options={reformatData(startLocations)}
              style={{ minWidth: 400 }}
              placeholder="Start"
              onSearch={(e) => setStart(e)}
              loading={startLoading}
              showSearch
              allowClear
              suffixIcon={startLoading ? <Spin /> : <HiLocationMarker />}
              onSelect={(e, { coord }) =>
                setCoords({ ...coords, start: coord })
              }
            />
            <Space>
              <Tag color="blue">Start Location:</Tag>
              {JSON.stringify(coords.start) ?? "no coords"} 👈
            </Space>
          </Flex>
        </Col>

        <Col span={24}>
          <Flex vertical gap={"middle"}>
            <Select
              options={reformatData(endLocations)}
              style={{ minWidth: 400 }}
              placeholder="End"
              onSearch={(e) => setEnd(e)}
              loading={endLoading}
              showSearch
              allowClear
              suffixIcon={endLoading ? <Spin /> : <HiLocationMarker />}
              onSelect={(e, { coord }) => setCoords({ ...coords, end: coord })}
            />
            <Space>
              <Tag color="blue">End Location:</Tag>
              {JSON.stringify(coords.end) ?? "no coords"} 👈
            </Space>
          </Flex>
        </Col>
      </Row>
    </>
  );
}

export default App;
