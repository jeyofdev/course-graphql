import { useState } from 'react';
import Skill from '../../atoms/skill/Skill';
import * as styled from './Wilder.styled';
import { ButtonIcon } from '../../atoms/buttons/Button';
import Modal from '../../organisms/modal/Modal';
import Dialog from '../dialog/Dialog';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../utils/toasts';
import { DANGER, SUCCESS } from '../../styles/constants.styles';
import { DELETE_WILDER } from '../../queries/mutations';
import { useMutation } from '@apollo/client';
import { GET_WILDERS } from '../../queries/queries';
import { v4 as uuidv4 } from 'uuid';
import { SkillType, WilderType } from '../../types';

const Wilder = ({ _id, name, content, skills }: WilderType) => {
    const history = useHistory();
    const [modalForDeleteIsShow, setModalForDeleteIsShow] = useState(false);

    const [deleteWilder] = useMutation(DELETE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder ${name} has been deleted`);
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const handleDelete = () => {
        try {
            deleteWilder({ variables: { id: _id } });
            showOrHideModal();
        } catch (error) {}
    };

    const showOrHideModal = () => {
        setModalForDeleteIsShow(!modalForDeleteIsShow);
    };

    return (
        <styled.Article>
            <ButtonIcon
                themeColor={DANGER}
                icon={faTimes}
                right="0.5rem"
                size="1rem"
                onClick={showOrHideModal}
            />

            <ButtonIcon
                themeColor={SUCCESS}
                icon={faPen}
                right="2.5rem"
                size="0.75rem"
                onClick={() => history.push(`/users/update/${_id}`)}
            />

            <styled.Img
                src="/assets/images/blank-profile-picture-female.png"
                alt="Jane Doe Profile"
            />

            <styled.H3>{name}</styled.H3>
            <styled.Paragraph>{content}</styled.Paragraph>

            {skills.length > 0 && (
                <>
                    <styled.Ul>
                        {skills.map((skill: SkillType) => {
                            return (
                                <Skill
                                    key={uuidv4()}
                                    title={skill.title}
                                    votes={skill.votes}
                                />
                            );
                        })}
                    </styled.Ul>
                </>
            )}

            <Link to={`/users/details/${_id}`} className="btn-user-link">
                Voir plus
            </Link>

            {modalForDeleteIsShow && (
                <Modal onClose={showOrHideModal}>
                    <Dialog
                        content={`Êtes vous sûr de vouloir supprimer le wilder '${name}'?`}
                        onCancel={showOrHideModal}
                        onConfirmation={handleDelete}
                    />
                </Modal>
            )}
            <ToastContainer position="bottom-right" />
        </styled.Article>
    );
};

export default Wilder;
