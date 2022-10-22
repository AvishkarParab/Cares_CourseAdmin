import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AddCourseModule = () => {
  var location = useLocation();
  var navigate = useNavigate();

  const [mtype, setMtype] = useState("none");
  const [sno, setSno] = useState("");
  const [moduledata, setModuleData] = useState({
    mtype: "",
    vidlink: "",
    imgfile: "",
    quest: "",
    opt1:'',
    opt2:'',
    opt3:'',
    opt4:'',
    coropt: "",
  });

  const checkMtype = (e) => {
    setMtype(e.target.value);
    setModuleData({ ...moduledata, mtype: e.target.value });
  };
  const checkSuggest = (e) => {
    setSno(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      var response = await axios.post("/module/add", {
        cid: location.state.cid,
        mtype: moduledata.mtype,
        vidlink: moduledata.vidlink,
        image: moduledata.imgfile,
        quest: moduledata.quest,
        opt1: moduledata.opt1,
        opt2: moduledata.opt2,
        opt3: moduledata.opt3,
        opt4: moduledata.opt4,
        coropt: moduledata.coropt,
      });
      console.log(response.data.result);
      navigate("/course");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container className="mt-3">
        <h4 className="text-center mt-3">ADD COURSE MODULE</h4>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Select Module Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                checkMtype(e);
              }}
            >
              <option> Please Select </option>
              <option value="none">None</option>
              <option value="video">Video</option>
              <option value="image">Image</option>
            </Form.Select>
          </Form.Group>
          {mtype === "video" ? (
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter Video Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Paste your link here"
                onChange={(e) => {
                  setModuleData({ ...moduledata, vidlink: e.target.value });
                }}
                value={moduledata.vidlink}
              />
            </Form.Group>
          ) : (
            ""
          )}
          {mtype === "image" ? (
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Upload Image :</Form.Label>
              <Form.Control
                type="file"
                placeholder="Display name for coressponding keyword"
              />
            </Form.Group>
          ) : (
            ""
          )}
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Your Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="What is your question ?"
              onChange={(e) => {
                setModuleData({ ...moduledata, quest: e.target.value });
              }}
              value={moduledata.quest}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Select the number of options</Form.Label>
            <Form.Select
              aria-label="Default select number of options"
              onChange={(e) => {
                checkSuggest(e);
              }}
            >
              <option>Please Select</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Form.Select>
          </Form.Group>
          {sno === "2" ? (
            <>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter Option 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option 1"
                  onChange={(e) => {
                    setModuleData({ ...moduledata, opt1: e.target.value });
                  }}
                  value={moduledata.opt1}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter Option 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option 2"
                  onChange={(e) => {
                    setModuleData({ ...moduledata, opt2: e.target.value });
                  }}
                  value={moduledata.opt2}
                />
              </Form.Group>
              <div>
                <label htmlFor="">Select Correct Option</label>
                <div  className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="coropt"
                        type="radio"
                        id={`inline-radio-1`}
                        value="1"
                        onChange={(e) => {
                            setModuleData({ ...moduledata, coropt: e.target.value });
                        }}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="coropt"
                        type="radio"
                        id={`inline-radio-2`}
                        value="2"
                        onChange={(e) => {
                            setModuleData({ ...moduledata, coropt: e.target.value });
                        }}
                    />
                </div>
            </div>
            </>
          ) : (
            ""
          )}
          {sno === "4" ? (
            <>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter Option 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option 1"
                  onChange={(e) => {
                    setModuleData({ ...moduledata, opt1: e.target.value });
                  }}
                  value={moduledata.opt1}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter Option 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option 2"
                  onChange={(e) => {
                    setModuleData({ ...moduledata, opt2: e.target.value });
                  }}
                  value={moduledata.opt2}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter Option 3</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option 3"
                  onChange={(e) => {
                    setModuleData({ ...moduledata, opt3: e.target.value });
                  }}
                  value={moduledata.opt3}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter Option 4</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="option 4"
                  onChange={(e) => {
                    setModuleData({ ...moduledata, opt4: e.target.value });
                  }}
                  value={moduledata.opt4}
                />
              </Form.Group>
              <div>
                <label htmlFor="">Select Correct Option</label>
                <div  className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="coropt"
                        type="radio"
                        id={`inline-radio-1`}
                        value="1"
                        onChange={(e) => {
                            setModuleData({ ...moduledata, coropt: e.target.value });
                        }}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="coropt"
                        type="radio"
                        id={`inline-radio-2`}
                        value="2"
                        onChange={(e) => {
                            setModuleData({ ...moduledata, coropt: e.target.value });
                        }}
                    />
                    <Form.Check
                        inline
                        label="3"
                        name="coropt"
                        type="radio"
                        id={`inline-radio-3`}
                        value="3"
                        onChange={(e) => {
                            setModuleData({ ...moduledata, coropt: e.target.value });
                        }}
                    />
                    <Form.Check
                        inline
                        label="4"
                        name="coropt"
                        type="radio"
                        id={`inline-radio-4`}
                        value="4"
                        onChange={(e) => {
                            setModuleData({ ...moduledata, coropt: e.target.value });
                        }}
                    />
                </div>
            </div>
            </>
          ) : (
            ""
          )}
            
          <Button
            className="mb-3"
            variant="primary"
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddCourseModule;
