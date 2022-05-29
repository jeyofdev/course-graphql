import { ChangeEvent, FormEvent, useState } from 'react';
import { Input, Textarea } from '../../atoms/form/input/Input';
import * as styled from './Form.styled';
import { useHistory } from 'react-router';
import { skillsOptionsDatas } from '../../datas/formDatas';
import Checkbox from '../../atoms/form/checkbox/Checkbox';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { CREATE_WILDER, UPDATE_WILDER } from '../../queries/mutations';
import { notifyError, notifySuccess } from '../../utils/toasts';
import { GET_WILDERS } from '../../queries/queries';
import { FormType, SkillType } from '../../types';

const Form = ({ method, wilder }: FormType) => {
    const history = useHistory();
    const [name, setName] = useState(wilder?.name ?? '');
    const [city, setCity] = useState(wilder?.city ?? '');
    const [content, setContent] = useState(wilder?.content ?? '');
    const [skills, setSkills] = useState(wilder?.skills ?? []);

    const [createWilder] = useMutation(CREATE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder "${name}" has been created`);
            setName('');
            setCity('');
            setContent('');
            setSkills([]);
            history.push('/');
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const [updateWilder] = useMutation(UPDATE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder "${name}" has been updated`);
            history.push('/');
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSkills(
            e.target.checked
                ? [...skills, { title: e.target.name, votes: 0 }]
                : skills.filter(
                      (skill: SkillType) => skill.title !== e.target.name
                  )
        );
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (method === 'post') {
                createWilder({ variables: { name, city, content, skills } });
            }
            if (method === 'put') {
                updateWilder({
                    variables: { id: wilder?._id, name, city, content, skills },
                });
            }
        } catch (error) {}
    };

    return (
        <styled.Container>
            <form onSubmit={onSubmit}>
                <Input
                    label="name"
                    name="name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setName(e.currentTarget.value);
                    }}
                />

                <Input
                    label="city"
                    name="city"
                    value={city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCity(e.currentTarget.value);
                    }}
                />

                <Textarea
                    label="content"
                    name="content"
                    value={content}
                    rows={8}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setContent(e.currentTarget.value);
                    }}
                />

                <styled.Skills>
                    {skillsOptionsDatas.map((skill) => (
                        <Checkbox
                            key={uuidv4()}
                            label={skill}
                            name={skill}
                            checked={
                                skills.filter(
                                    (item: SkillType) => item.title === skill
                                ).length > 0
                            }
                            onChange={handleChange}
                        />
                    ))}
                </styled.Skills>

                {name && content && (
                    <div>
                        <styled.Submit type="submit" />
                    </div>
                )}
            </form>
        </styled.Container>
    );
};

export default Form;
