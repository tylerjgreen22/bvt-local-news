import {
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  
} from "@chakra-ui/react";
import { Formik, Field, Form, useFormik } from 'formik';



const Subscribe = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <div className="h-screen" style={{ display: 'flex', flexDirection: 'column' }}>

      <Center p={5} flexDirection="column" alignItems="center" textAlign="center">
        <Heading as="h1" size="2xl">
          Subscriptions
        </Heading>
        <Heading as="h2" size="lg">
          Follow Your Favorite News for Regular Updates
        </Heading>
      </Center>
      <Divider />

      <Formik
        initialValues={{
          checked: [],
          selectedRadio: '',
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, handleChange }) => (


          <Form>


            <Flex className=" pb-10" direction={{ base: "column", md: "row" }}>

              <Stack p={1} width={{ base: "100%", md: "33.3333%" }}>
                <Center>
                  <Heading size="lg" id="checkbox-group">Sources</Heading>
                </Center>
                <Center>
                  <Stack className="p-5" direction="column">
                    <label className="p-3">
                      Modesto Bee
                      <Checkbox
                        className="p-2"
                        size="lg"
                        name="checked"
                        colorScheme="accent"
                        value="Modesto Bee"
                        isChecked={values.checked.includes("Modesto Bee")}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="p-3">
                      Riverbank News
                      <Checkbox
                        className="p-2"
                        size="lg"
                        name="checked"
                        colorScheme="accent"
                        value="Riverbank News"
                        isChecked={values.checked.includes("Riverbank News")}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="p-3">
                      Oakdale Leader
                      <Checkbox
                        className="p-2"
                        size="lg"
                        name="checked"
                        colorScheme="accent"
                        value="Oakdale Leader"
                        isChecked={values.checked.includes("Oakdale Leader")}
                        onChange={handleChange}
                      />
                     
                    </label>
                    <label className="p-3">
                      Tracy Press
                      <Checkbox
                        className="p-2"
                        size="lg"
                        name="checked"
                        colorScheme="accent"
                        value="Tracy Press"
                        isChecked={values.checked.includes("Tracy Press")}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="p-3">
                      Ripon News
                      <Checkbox
                        className="p-2"
                        size="lg"
                        name="checked"
                        colorScheme="accent"
                        value="Ripon News"
                        isChecked={values.checked.includes("Ripon News")}
                        onChange={handleChange}
                      />
                      
                    </label>
                    <label className="p-3">
                      Turlock Journal
                      <Checkbox
                        className="p-2"
                        size="lg"
                        name="checked"
                        colorScheme="accent"
                        value="Turlock Journal"
                        isChecked={values.checked.includes("Turlock Journal")}
                        onChange={handleChange}
                      />
                     
                    </label>
                  </Stack>
                </Center>
              </Stack>

              <Stack p={1} width={{ base: "100%", md: "33.3333%" }}>
                <Center>
                  <Heading size="lg">Update Frequency : {values.selectedRadio}</Heading>
                </Center>
                <Center>
                  <RadioGroup
                    className="p-5"
                    role="group"
                    aria-labelledby="my-radio-group">
                    <Stack direction="row">
                      <label className="p-3">
                        <Radio
                          
                          size="lg"
                          name="selectedRadio"
                          colorScheme="accent"
                          value="Daily"
                          isChecked={values.selectedRadio.includes("Daily")}
                          onChange={handleChange}
                        />
                        Daily
                      </label>
                      <label className="p-3">
                        <Radio
                         
                          size="lg"
                          name="selectedRadio"
                          value="Twice Daily"
                          colorScheme="accent"
                          isChecked={values.selectedRadio.includes("Twice Daily")}
                          onChange={handleChange}
                        />
                        Twice Daily
                      </label>
                      <label className="p-3">
                        <Radio
                          size="lg"
                          name="selectedRadio"
                          colorScheme="accent"
                          value="Weekly"
                          isChecked={values.selectedRadio.includes("Weekly")}
                          onChange={handleChange}
                        />
                        Weekly
                      </label>
                    </Stack>
                  </RadioGroup>
                </Center>
              </Stack>

              <Stack p={1} width={{ base: "100%", md: "33.3333%" }}>
                <Center>
                  <Heading
                    size="lg"
                    id="checkbox-group">
                    Categories
                  </Heading>
                </Center>
                <Center>
                  <Flex direction={{ base: "column", md: "row" }}>
                    <Stack className=" p-5">
                      <label className="p-3">
                        Breaking News
                        <Checkbox
                          className="p-2"
                          size="lg"
                          name="checked"
                          colorScheme="accent"
                          value="Breaking News"
                          isChecked={values.checked.includes("Breaking News")}
                          onChange={handleChange}
                        />
                        
                      </label>
                      <label className="p-3">
                        Local News
                        <Checkbox
                          className="p-2"
                          size="lg"
                          name="checked"
                          colorScheme="accent"
                          value="Local News"
                          isChecked={values.checked.includes("Local News")}
                          onChange={handleChange}
                        />
                      </label>
                      <label className="p-3">
                        Crime
                        <Checkbox
                          className="p-2"
                          size="lg"
                          name="checked"
                          colorScheme="accent"
                          value="Crime"
                          isChecked={values.checked.includes("Crime")}
                          onChange={handleChange}
                        />
                        
                      </label>
                      <label className="p-3">
                        Government
                        <Checkbox
                          className="p-2"
                          size="lg"
                          name="checked"
                          colorScheme="accent"
                          value="Government"
                          isChecked={values.checked.includes("Government")}
                          onChange={handleChange}
                        />
                        
                      </label>
                      <label className="p-3">
                        Education
                        <Checkbox
                          className="p-2"
                          size="lg"
                          name="checked"
                          colorScheme="accent"
                          value="Education"
                          isChecked={values.checked.includes("Education")}
                          onChange={handleChange}
                        />
                        
                      </label>
                    </Stack>
                    <Stack className=" p-5">
                      <label className="p-3">
                        Sports
                        <Checkbox
                          className="p-2"
                          size="lg"
                          name="checked"
                          colorScheme="accent"
                          value="Sports"
                          isChecked={values.checked.includes("Sports")}
                          onChange={handleChange}
                        />
                        
                      </label>

                      <label className="p-3">
                        High School Sports
                        <Checkbox
                          className="p-2"
                          size="md"
                          name="checked"
                          colorScheme="accent"
                          value="High School Sports"
                          isChecked={values.checked.includes("High School Sports")}
                          onChange={handleChange}
                        />
                        
                      </label>
                      <label className="p-3">
                        Local Sports
                        <Checkbox
                          className="p-2"
                          size="md"
                          name="checked"
                          colorScheme="accent"
                          value="Local Sports"
                          isChecked={values.checked.includes("Local Sports")}
                          onChange={handleChange}
                        />
                       
                      </label>
                    </Stack>
                  </Flex>
                </Center>
              </Stack>
            </Flex>

            <Center className="pt-40">
              <Button w="100%" bg="accent" mt={4} type="submit">
                Save and Submit
              </Button>
            </Center>

          </Form>
        )}
      </Formik>

    </div>
  );
};

export default Subscribe;
