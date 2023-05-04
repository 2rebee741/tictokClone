import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:tictokclone/constants/gaps.dart';
import 'package:tictokclone/constants/sizes.dart';

class ChatDetailScreen extends StatefulWidget {
  const ChatDetailScreen({super.key});

  @override
  State<ChatDetailScreen> createState() => _ChatDetailScreenState();
}

bool _isWriting = false;

class _ChatDetailScreenState extends State<ChatDetailScreen> {
  final ScrollController _scrollController = ScrollController();

  void _onClosePressed() {
    Navigator.of(context).pop();
  }

  void _stopWriting() {
    FocusScope.of(context).unfocus();
    setState(() {
      _isWriting = false;
    });
  }

  void _onStartWriting() {
    setState(() {
      _isWriting = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: ListTile(
          contentPadding: EdgeInsets.zero,
          horizontalTitleGap: Sizes.size8,
          leading: Stack(
            children: [
              const CircleAvatar(
                radius: Sizes.size24,
                foregroundImage: NetworkImage(
                    "https://images.unsplash.com/photo-1682955446734-ed483c974105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"),
                child: Text("ANY"),
              ),
              Positioned(
                bottom: -Sizes.size4,
                right: -Sizes.size4,
                child: Container(
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.white, width: 4),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const CircleAvatar(
                    radius: Sizes.size8,
                    backgroundColor: Colors.green,
                  ),
                ),
              )
            ],
          ),
          title: const Text(
            "USER",
            style: TextStyle(
              fontWeight: FontWeight.w600,
            ),
          ),
          subtitle: const Text(
            "Active Now",
          ),
          trailing: Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
              FaIcon(
                FontAwesomeIcons.flag,
                color: Colors.black,
                size: Sizes.size20,
              ),
              Gaps.h20,
              FaIcon(
                FontAwesomeIcons.ellipsis,
                color: Colors.black,
                size: Sizes.size20,
              ),
            ],
          ),
        ),
      ),
      body: Stack(
        children: [
          ListView.separated(
            padding: const EdgeInsets.symmetric(
              vertical: Sizes.size12,
              horizontal: Sizes.size14,
            ),
            itemBuilder: (context, index) {
              final isMine = index % 2 == 0;
              return Row(
                mainAxisSize: MainAxisSize.min,
                mainAxisAlignment:
                    isMine ? MainAxisAlignment.end : MainAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(
                      Sizes.size14,
                    ),
                    decoration: BoxDecoration(
                      color:
                          isMine ? Colors.blue : Theme.of(context).primaryColor,
                      borderRadius: BorderRadius.only(
                        topLeft: const Radius.circular(Sizes.size20),
                        topRight: const Radius.circular(
                          Sizes.size20,
                        ),
                        bottomLeft: Radius.circular(
                          isMine ? Sizes.size20 : Sizes.size5,
                        ),
                        bottomRight: Radius.circular(
                          isMine ? Sizes.size5 : Sizes.size20,
                        ),
                      ),
                    ),
                    child: const Text(
                      "MESASSGES",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: Sizes.size16,
                      ),
                    ),
                  ),
                ],
              );
            },
            separatorBuilder: (context, index) => Gaps.v10,
            itemCount: 10,
          ),
          Positioned(
            bottom: Sizes.size4,
            width: MediaQuery.of(context).size.width,
            child: BottomAppBar(
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: Sizes.size16,
                  vertical: Sizes.size10,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: SizedBox(
                        height: Sizes.size44,
                        child: TextField(
                          onTap: _onStartWriting,
                          textInputAction: TextInputAction.newline,
                          expands: true,
                          minLines: null,
                          maxLines: null,
                          cursorColor: Theme.of(context).primaryColor,
                          decoration: InputDecoration(
                            hintText: "Send a message..",
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(
                                Sizes.size12,
                              ),
                              borderSide: BorderSide.none,
                            ),
                            suffixIcon: Padding(
                              padding: const EdgeInsets.only(
                                right: Sizes.size14,
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Gaps.h14,
                                  FaIcon(
                                    FontAwesomeIcons.faceSmile,
                                    color: Colors.grey.shade900,
                                  ),
                                ],
                              ),
                            ),
                            filled: true,
                            fillColor: Colors.grey.shade200,
                            contentPadding: const EdgeInsets.symmetric(
                              horizontal: Sizes.size12,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Gaps.h12,
                    if (_isWriting)
                      GestureDetector(
                        onTap: _stopWriting,
                        child: SizedBox(
                          child: FaIcon(
                            FontAwesomeIcons.paperPlane,
                            color: _isWriting
                                ? Theme.of(context).primaryColor
                                : Colors.black,
                          ),
                        ),
                      )
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
