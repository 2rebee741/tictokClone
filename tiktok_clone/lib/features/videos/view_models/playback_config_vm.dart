import 'package:flutter/widgets.dart';
import 'package:tictokclone/features/videos/models/playback_config_model.dart';
import 'package:tictokclone/features/videos/repos/video_playback_config_repo.dart';

class PlaybackConfigViewModel extends ChangeNotifier {
  final PlaybackConfigRepository _repository;

  late final PlaybackConfigModel _model = PlaybackConfigModel(
    muted: _repository.isMuted(),
    autoplay: _repository.isAutoplay(),
  );

  PlaybackConfigViewModel(this._repository);

  bool get muted => _model.muted;
  bool get autoplay => _model.autoplay;

  void setMuted(bool value) {
    //write
    _repository.setMuted(value);
    //model modify
    _model.muted = value;
    //listen 하는 모두에게 통보
    notifyListeners();
  }

  void setAutoplay(bool value) {
    //write
    _repository.setAutoplay(value);
    //model modify
    _model.autoplay = value;
    //listen 하는 모두에게 통보
    notifyListeners();
  }
}
